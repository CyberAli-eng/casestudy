// components/icons/index.js

// ✅ Import FontAwesome icons
import {
  FaChartLine,
  FaMoneyBillWave,
  FaClock,
  FaDatabase,
  FaUsers,
  FaCog,
  FaRobot,
  FaLink,
  FaArrowRight,
  FaQuoteLeft,
  FaCheck
} from 'react-icons/fa'

// ✅ Import Lucide icons — rename them to avoid duplicates
import {
  Users as LucideUsers,
  Inbox as LucideInbox,
  Briefcase as LucideBriefcase,
  LineChart as LucideLineChart,
  DollarSign as LucideDollarSign,
  Zap as LucideZap,
  Eye as LucideEye,
   Clock as LucideClock,
  Target as LucideTarget,
  Settings as LucideSettings,
  PieChart as LucidePieChart,
  Database as LucideDatabase,
  Workflow as LucideWorkflow,
  Brain as LucideBrain,
  Link as LucideLink,
  Rocket as LucideRocket,
  TrendingUp as LucideTrendingUp
} from 'lucide-react'

// ✅ Unified icon map
export const iconMap = {
  // Lucide icons
  users: LucideUsers,
  inbox: LucideInbox,
  briefcase: LucideBriefcase,
  'line-chart': LucideLineChart,
  'dollar-sign': LucideDollarSign,
  zap: LucideZap,
  eye: LucideEye,
  clock: LucideClock,
  target: LucideTarget,
  settings: LucideSettings,
  'pie-chart': LucidePieChart,
  database: LucideDatabase,
  workflow: LucideWorkflow,
  brain: LucideBrain,
  link: LucideLink,
  rocket: LucideRocket,
  trending_up: LucideTrendingUp,

  // FontAwesome + emoji-based mappings
  meetings: FaChartLine,
  savings: FaMoneyBillWave,
  time: FaClock,
  accuracy: FaDatabase,
  '👥': FaUsers,
  '📥': LucideInbox,
  '💼': LucideBriefcase,
  '📈': LucideLineChart,
  '💰': LucideDollarSign,
  '⚡': LucideZap,
  '👁️': LucideEye,
  '⏱️': FaClock,
  '🎯': FaCog,
  '🛠️': FaCog,
  '📊': LucideLineChart,
  '🚀': FaChartLine,
  '🤖': FaRobot,
  '🔗': FaLink,
}

// ✅ Helper to render icons
export const getIcon = (key, className = 'w-6 h-6 text-indigo-600') => {
  const IconComponent = iconMap[key]
  if (!IconComponent) return null
  return <IconComponent className={className} strokeWidth={1.8} />
}
