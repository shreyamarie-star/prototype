/* global React, ReactDOM, AGENDA, AGENDA_DAYS, AGENDA_META, SPONSORS */
const { useState, useMemo, useEffect } = React;

const TYPE_LABELS = {
  'keynote': 'Keynote',
  'presentation': 'Presentation',
  'panel': 'Panel',
  'fireside': 'Fireside Chat',
  'networking': 'Networking',
  'ceo-forum': 'CEO Forum'
};

// Returns a flat array of sessions for a given day, regardless of whether
// the day uses period buckets (morning/afternoon/evening) or a single
// flat `sessions` array.
function flattenDay(dayId) {
  const data = AGENDA[dayId] || {};
  if (Array.isArray(data.sessions)) return data.sessions;
  return [
    ...(data.morning || []),
    ...(data.afternoon || []),
    ...(data.evening || [])
  ];
}

const PERIODS = [
  { id: 'morning',   label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon' },
  { id: 'evening',   label: 'Evening' }
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sponsorStyle": "lockup",
  "headerStyle": "editorial",
  "showStats": true,
  "showHeroImage": false,
  "density": "spacious",
  "embedMode": "compact"
}/*EDITMODE-END*/;

// ─── Sponsor mark ────────────────────────────────────────────
function SponsorMark({ id }) {
  const sp = (window.SPONSORS || {})[id];
  if (!sp) return <span className="sponsor-mark is-text">{id}</span>;
  if (sp.src) {
    return (
      <span className="sponsor-mark">
        <img src={sp.src} alt={sp.name} />
      </span>
    );
  }
  return <span className="sponsor-mark is-text">{sp.name}</span>;
}

// ─── Sponsor lockup ──────────────────────────────────────────
function SponsorLockup({ sponsor, style }) {
  if (!sponsor) return null;
  if (style === 'inline-text') {
    return (
      <span className="sponsor-lockup" style={{ background: 'transparent', border: 'none', padding: 0 }}>
        <span className="sp-label">{sponsor.label.toLowerCase()}</span>
        <SponsorMark id={sponsor.id} />
      </span>
    );
  }
  return (
    <span className="sponsor-lockup">
      <span className="sp-label">{sponsor.label.toLowerCase()}</span>
      <span className="sp-divider"></span>
      <SponsorMark id={sponsor.id} />
    </span>
  );
}

// ─── Location pin icon ───────────────────────────────────────
const PinIcon = () => (
  <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
    <path d="M5.5 0.5C3.01 0.5 1 2.51 1 5c0 3.4 4.5 7.5 4.5 7.5S10 8.4 10 5c0-2.49-2.01-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1"/>
    <circle cx="5.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// ─── Speaker card ────────────────────────────────────────────
function Speaker({ s }) {
  const inner = (
    <>
      <span className="speaker-name">{s.name}</span>
      <span className="speaker-role">{s.role}</span>
      <span className="speaker-company">{s.company}</span>
    </>
  );
  if (s.url) {
    return <a className="speaker" href={s.url} target="_blank" rel="noopener">{inner}</a>;
  }
  return <div className="speaker">{inner}</div>;
}

// ─── Session row ─────────────────────────────────────────────
function SessionRow({ s, sponsorStyle }) {
  const isNetworking = s.type === 'networking';
  return (
    <div className={`session${isNetworking ? ' is-networking' : ''}`}>
      <div className="session-time-col">
        <span className="session-time">{s.time}</span>
        <div className="session-time-marker"></div>
      </div>
      <div className="session-body">
        {s.location && (
          <div className="tags-row">
            <span className="loc-tag">
              <PinIcon />
              {s.location}
            </span>
          </div>
        )}
        <div className="session-title">
          {s.titleUrl ? (
            <a className="session-title-link" href={s.titleUrl} target="_blank" rel="noopener">
              {s.title}
            </a>
          ) : s.title}
        </div>
        {s.note && <div className="session-note">{s.note}</div>}
        {s.sponsor && <div className="sponsor-row"><SponsorLockup sponsor={s.sponsor} style={sponsorStyle} /></div>}
        {s.speakers && s.speakers.length > 0 && (
          <div className="speakers">
            {s.speakers.map((sp, i) => <Speaker key={i} s={sp} />)}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Scroll hint ────────────────────────────────────────────
// Shows a "more below" chevron when the bottom of the session list
// is below the viewport. The pill is rendered as a sticky element ABOVE
// the long list so it pins to the viewport bottom while the list scrolls
// past. The sentinel (used to detect "we've reached the end") is a
// separate component placed at the bottom of the list.
const _scrollHintState = {
  setVisible: null,
  sentinelEl: null
};

function ScrollHintSentinel() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    _scrollHintState.sentinelEl = ref.current;
    return () => { if (_scrollHintState.sentinelEl === ref.current) _scrollHintState.sentinelEl = null; };
  }, []);
  return <div ref={ref} className="scroll-sentinel" aria-hidden="true"></div>;
}

function ScrollHint({ deps }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    _scrollHintState.setVisible = setVisible;
    setVisible(false);

    const check = () => {
      const el = _scrollHintState.sentinelEl;
      if (!el) { setVisible(false); return; }
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const rect = el.getBoundingClientRect();
      // Visible whenever the sentinel sits below the viewport bottom edge.
      setVisible(rect.top > vh - 40);
    };
    check();
    const t = setTimeout(check, 250);
    const t2 = setTimeout(check, 800); // post-font/image relayout
    window.addEventListener('resize', check);
    window.addEventListener('scroll', check, { passive: true });
    document.addEventListener('scroll', check, { passive: true, capture: true });

    return () => {
      clearTimeout(t); clearTimeout(t2);
      _scrollHintState.setVisible = null;
      window.removeEventListener('resize', check);
      window.removeEventListener('scroll', check);
      document.removeEventListener('scroll', check, { capture: true });
    };
  }, deps);

  return (
    <div className="scroll-hint-anchor" aria-hidden="true">
      <div className={"scroll-hint" + (visible ? ' visible' : '')}>
        <span className="scroll-hint-label">More below</span>
        <svg className="scroll-hint-chev" width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────
function Hero({ tweaks, totalSessions, totalSpeakers }) {
  const isCompact = tweaks.embedMode === 'compact';
  if (isCompact) return null;
  return (
    <div className="hero">
      <div className="hero-eyebrow">{AGENDA_META.eyebrow} · {AGENDA_META.status}</div>
      <h1>The <em>Agenda</em></h1>
      <div className="hero-meta">
        <div className="meta-block">
          <div className="meta-label">Dates</div>
          <div className="meta-value">{AGENDA_META.dates}</div>
        </div>
        <div className="meta-block">
          <div className="meta-label">Venue</div>
          <div className="meta-value">{AGENDA_META.venue}</div>
        </div>
        <div className="meta-block">
          <div className="meta-label">Convened by</div>
          <div className="meta-value">{AGENDA_META.organizer}</div>
        </div>
      </div>
      {tweaks.showStats && (
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">{AGENDA_DAYS.length}</div>
            <div className="stat-label">Days</div>
          </div>
          <div className="stat">
            <div className="stat-num">{totalSessions}</div>
            <div className="stat-label">Sessions</div>
          </div>
          <div className="stat">
            <div className="stat-num">{totalSpeakers}+</div>
            <div className="stat-label">Speakers</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = (window.useTweaks || (() => [TWEAK_DEFAULTS, () => {}]))(TWEAK_DEFAULTS);
  const [activeDay, setActiveDay] = useState(AGENDA_DAYS[0].id);

  const sessionsToShow = useMemo(() => flattenDay(activeDay), [activeDay]);

  // Stats
  const totalSessions = useMemo(() => {
    let n = 0;
    for (const d of AGENDA_DAYS) {
      n += flattenDay(d.id).filter(s => s.type !== 'networking').length;
    }
    return n;
  }, []);

  const totalSpeakers = useMemo(() => {
    const seen = new Set();
    for (const d of AGENDA_DAYS) {
      for (const s of flattenDay(d.id)) {
        (s.speakers || []).forEach(sp => seen.add(sp.name));
      }
    }
    return seen.size;
  }, []);

  return (
    <div className={"page" + (tweaks.embedMode === 'compact' ? ' is-compact' : '')}>
      <Hero tweaks={tweaks} totalSessions={totalSessions} totalSpeakers={totalSpeakers} />

      {/* Day nav */}
      <div className="day-nav">
        {AGENDA_DAYS.map(d => {
          return (
            <button
              key={d.id}
              className={`day-tab${activeDay === d.id ? ' active' : ''}`}
              onClick={() => setActiveDay(d.id)}
            >
              <div className="day-tab-row">
                <span className="day-tab-label">{d.label}</span>
                <span className="day-tab-weekday">{d.weekday}</span>
              </div>
              <div className="day-tab-date">{d.date}</div>
            </button>
          );
        })}
      </div>

      {/* Sessions */}
      <div className="sessions">
        <div className="session-list visible" key={activeDay}>
          {sessionsToShow.length === 0 && <div className="empty">No sessions for this day.</div>}
          {sessionsToShow.map((s, i) => (
            <SessionRow key={i} s={s} sponsorStyle={tweaks.sponsorStyle} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="agenda-foot"></div>

      {/* Tweaks panel */}
      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Sponsor logos">
            <window.TweakRadio
              label="Logo style"
              value={tweaks.sponsorStyle}
              onChange={(v) => setTweak('sponsorStyle', v)}
              options={[
                { value: 'lockup', label: 'Pill lockup' },
                { value: 'inline-text', label: 'Inline (no border)' }
              ]}
            />
          </window.TweakSection>
          <window.TweakSection title="Layout">
            <window.TweakRadio
              label="Display mode"
              value={tweaks.embedMode}
              onChange={(v) => setTweak('embedMode', v)}
              options={[
                { value: 'compact', label: 'Compact (embedded)' },
                { value: 'full', label: 'Full (standalone)' }
              ]}
            />
          </window.TweakSection>
          <window.TweakSection title="Hero">
            <window.TweakToggle
              label="Show stats row"
              checked={tweaks.showStats}
              onChange={(v) => setTweak('showStats', v)}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
