// Interactive behavior
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Filter projects
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-sky-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-900', 'text-slate-300');
      });

      btn.classList.add('active', 'bg-sky-500', 'text-slate-950', 'font-bold');
      btn.classList.remove('bg-slate-900', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

const modalData = {
  'ops-copilot': {
    title: 'Enterprise Ops Copilot & Workflow Automation',
    icon: 'fa-gears',
    color: 'sky',
    details: `
      <p class="text-sm text-slate-300 leading-relaxed">
        <strong>Overview:</strong> Designed and deployed an agentic Ops Copilot that automates internal company workflows, monitors system logs, and coordinates operational tasks.
      </p>
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
        <p class="text-sky-400">// Key Technical Capabilities</p>
        <p>• Tool-calling state machine executing structured multi-step tasks.</p>
        <p>• Integrated safety guardrails and dry-run validation steps before mutations.</p>
        <p>• Django REST Framework backend with real-time SSE log streaming.</p>
        <p>• React SPA frontend dashboard displaying live agent execution trajectories.</p>
      </div>
    `
  },
  'talent-engine': {
    title: 'Agentic Talent Outreach & Candidate Matching Engine',
    icon: 'fa-user-gear',
    color: 'emerald',
    details: `
      <p class="text-sm text-slate-300 leading-relaxed">
        <strong>Overview:</strong> Built an autonomous talent sourcing and outreach engine combining LLM reasoning, vector embeddings, and rubric-based scoring.
      </p>
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
        <p class="text-emerald-400">// Key Technical Capabilities</p>
        <p>• Semantic search over vector embeddings with Claude & OpenAI model-graded scoring.</p>
        <p>• Ranks high-volume applicant pipelines and surfaces per-criterion rationale.</p>
        <p>• Automated personalized outreach drafting with structured tool calling.</p>
        <p>• Reviewer dashboard displaying criterion-by-criterion breakdown.</p>
      </div>
    `
  },
  'annotation-platform': {
    title: 'Human-in-the-Loop Annotation & Evaluation Platform',
    icon: 'fa-network-wired',
    color: 'purple',
    details: `
      <p class="text-sm text-slate-300 leading-relaxed">
        <strong>Overview:</strong> Full-stack evaluation platform powering model-evaluation and labeling programs for frontier AI clients across a contracted network of ~3,000 annotators.
      </p>
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
        <p class="text-purple-400">// Key Technical Capabilities</p>
        <p>• ~200 Django REST API endpoints, PostgreSQL on AWS RDS, React & Vite SPAs.</p>
        <p>• Dual-review calibration with gap-triggered tiebreak and inter-rater agreement (Cohen's &kappa; &ge; 0.60).</p>
        <p>• Statistical standards: Krippendorff's &alpha;, Gwet's AC1, Intraclass Correlation, Kendall's W.</p>
        <p>• Cloud security toward SOC 2: AWS GuardDuty, CloudTrail, WAF, Secrets Manager, and 50 WorkSpaces VDI.</p>
      </div>
    `
  },
  'voice-interviewer': {
    title: 'Voice AI Interviewer with Cheating Integrity Scoring',
    icon: 'fa-microphone-lines',
    color: 'amber',
    details: `
      <p class="text-sm text-slate-300 leading-relaxed">
        <strong>Overview:</strong> Deployed an end-to-end voice AI interviewer featuring HMAC session authentication, LLM-as-a-judge pipelines, and cheating detection.
      </p>
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
        <p class="text-amber-400">// Key Technical Capabilities</p>
        <p>• HMAC-authenticated session handoff between frontend and audio engine.</p>
        <p>• LLM-as-a-judge scoring with multilingual STT/TTS benchmarks.</p>
        <p>• Composite integrity scoring fused from MediaPipe computer vision & Whisper diarization.</p>
        <p>• Reduced candidate evaluation turnaround time by ~30%.</p>
      </div>
    `
  }
};

function openModal(key) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const data = modalData[key];

  if (data) {
    content.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="p-3 rounded-xl bg-slate-800 text-sky-400 text-xl"><i class="fa-solid ${data.icon}"></i></span>
        <h3 class="text-xl font-bold text-white">${data.title}</h3>
      </div>
      <div class="pt-2">${data.details}</div>
    `;
    overlay.classList.remove('hidden');
  }
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}
