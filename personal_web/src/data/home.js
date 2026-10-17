// 首页的静态内容数据

export const latencyNodes = [
  { code: 'NRT-TOKYO', value: '4ms', label: 'Primary Mesh', accent: true },
  { code: 'SFO-PACIFIC', value: '82ms', label: 'US Gateway', accent: false },
  { code: 'FRA-CENTRAL', value: '110ms', label: 'EU Relay', accent: false },
]

// tone: primary | secondary | default | muted
export const stack = [
  { name: 'Rust', tone: 'primary', dot: true },
  { name: 'TypeScript', tone: 'default' },
  { name: 'Go (Golang)', tone: 'default' },
  { name: 'WebAssembly', tone: 'default' },
  { name: 'Raft & CRDTs', tone: 'secondary', dot: true },
  { name: 'NixOS / Linux', tone: 'default' },
  { name: 'Tailwind Engine', tone: 'muted' },
]

export const projects = [
  {
    name: 'NexusDB',
    status: 'v1.4 Released',
    statusTone: 'secondary',
    description:
      '超轻量分布式时序存储引擎,专为工业边缘设备优化。以极低 CPU 负载实现零配置集群同步与快照压缩。',
    meta: { icon: 'star', iconTone: 'text-primary', text: '2.4k stars' },
    lang: 'Rust',
  },
  {
    name: 'Aura Canvas',
    status: 'Active Beta',
    statusTone: 'primary',
    description:
      '面向系统思考者的 120fps 低延迟无限画板。支持双向数据流映射、无限嵌套拓扑以及本地优先的离线状态保证。',
    meta: { icon: 'memory', iconTone: 'text-secondary', text: 'WebGL Canvas' },
    lang: 'TS / Rust',
  },
  {
    name: 'Khora Flake',
    status: 'Stable',
    statusTone: 'muted',
    description:
      '个人跨架构基础设施与 NixOS 声明式工作流体系。构建具备确定性、即时复刻与零配置还原的终极终端生态。',
    meta: { icon: 'terminal', iconTone: 'text-outline', text: 'Nix Flakes' },
    lang: 'Nix / Lua',
  },
]

export const footprints = [
  {
    place: 'Tokyo · 涩谷工作室',
    period: '2025.01 — PRESENT',
    description: '高密度数字节点试验,专注于边缘分布式系统的一致性仿真验证与本地硬件集成。',
    current: true,
  },
  {
    place: 'Chiang Mai · 山居代码',
    period: '2024.08 — 2024.12',
    description: '热带低干扰驻留,重构 NexusDB 内存存储分配器与异步事件驱动调度器。',
  },
  {
    place: 'Kyoto · 静心研究阶段',
    period: '2024.03 — 2024.07',
    description: '系统研读近代共识算法论文,完成分布式日志复制形式化逻辑建模初版。',
  },
]

export const gear = [
  { icon: 'laptop_mac', iconTone: 'text-primary', name: 'MacBook Pro 16" M3 Max', spec: '64GB / 2TB' },
  { icon: 'keyboard', iconTone: 'text-secondary', name: 'HHKB Pro Hybrid Type-S', spec: 'Blank Snow' },
  { icon: 'photo_camera', iconTone: 'text-tertiary', name: 'Sony A7C II + 40mm G', spec: 'Daily Visuals' },
  { icon: 'edit_note', iconTone: 'text-outline', name: 'Kindle Scribe', spec: 'Paperless Flow' },
]

export const milestones = [
  {
    badge: 'RESEARCH 75%',
    tone: 'primary',
    title: '确定性仿真测试在分布式一致性协议中的落地',
    date: 'MILESTONE #03 // Q2 2025',
    description:
      '借鉴 FoundationDB 的仿真测试哲学,在无损时钟与网络扰动模型下,自动化寻找并验证极端边缘竞态条件。',
    progress: 75,
  },
  {
    badge: 'ACTIVE DEV 40%',
    tone: 'secondary',
    title: '离线优先(Local-First)CRDT 协同文档同步协议规范',
    date: 'MILESTONE #02 // Q3 2025',
    description:
      '构建基于 WebRTC 与零信任存储桶的去中心化增量压缩传输层,兼顾极速首屏与即时多端无锁收敛。',
    progress: 40,
  },
  {
    badge: 'PLANNED 15%',
    tone: 'muted',
    title: '物理世界与数字游民能源自给自足方案实践白皮书',
    date: 'MILESTONE #01 // Q4 2025',
    description:
      '探索便携式光伏、离网储能与 Starlink 终端在极端户外条件下的高能效计算矩阵配置方案。',
    progress: 15,
  },
]
