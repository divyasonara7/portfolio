import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { TRADE_OFF_DATA } from '@/constants';
import {
    CheckCircle2,
    AlertTriangle,
    Layers,
    Settings,
    Zap,
    Users,
    Code2,
    GitBranch,
    Database,
    Shield,
    ArrowRight,
    X
} from 'lucide-react';
import { SectionHeader } from '@/components/ui';

// Architecture phases data
const ARCHITECTURE_PHASES = [
    {
        icon: AlertTriangle,
        title: "Problem Analysis",
        subtitle: "Understanding the Challenge",
        points: [
            "150+ connector forms with OAuth cascade requirements",
            "Non-engineers needed to modify form configurations",
            "Complex multi-step flows with cross-field dependencies",
            "Deep API integration with dynamic field populations"
        ],
        color: "amber"
    },
    {
        icon: GitBranch,
        title: "Trade-off Evaluation",
        subtitle: "Build vs Buy Decision Matrix",
        points: [
            "Evaluated Form.io, React-JSONSchema-Form, Formik",
            "Analyzed 6 key dimensions: Time, Cost, Control, Customization, Integration, Talent",
            "Quantified: Custom saves 75% time after 50+ forms",
            "Risk assessment: Vendor lock-in vs maintenance ownership"
        ],
        color: "blue"
    },
    {
        icon: Layers,
        title: "Architecture Design",
        subtitle: "Config-Driven Solution",
        points: [
            "Schema-First design: Forms defined in JSON/TypeScript",
            "Factory Pattern for 50+ dynamic field types",
            "Safe expression parser (no eval()) for conditions",
            "Plugin architecture for extensibility"
        ],
        color: "purple"
    },
    {
        icon: Zap,
        title: "Implementation",
        subtitle: "Production-Ready System",
        points: [
            "Multi-step wizard with state machine modeling",
            "Field dependency resolution engine",
            "Lazy loading with intelligent prefetching",
            "Type-safe configuration with runtime validation"
        ],
        color: "emerald"
    }
];

// Key metrics
const KEY_METRICS = [
    { value: "150+", label: "Connector Forms", icon: Database },
    { value: "75%", label: "Dev Time Saved", icon: Zap },
    { value: "50+", label: "Field Types", icon: Settings },
    { value: "3+ yrs", label: "Production Scale", icon: Shield }
];

// Architecture capabilities
const CAPABILITIES = [
    {
        title: "Configuration-First",
        description: "Forms defined in JSON schema, non-developers can modify safely",
        icon: Code2
    },
    {
        title: "Dependency Engine",
        description: "Field A → Field B → API Call → Field C cascade resolution",
        icon: GitBranch
    },
    {
        title: "Plugin Architecture",
        description: "Custom validators, field types, and lifecycle hooks",
        icon: Settings
    },
    {
        title: "Full-Stack Sync",
        description: "Shared validation schema between frontend and backend",
        icon: Layers
    }
];

const colorClasses = {
    amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
        icon: "text-amber-500"
    },
    blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        icon: "text-blue-500"
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        icon: "text-purple-500"
    },
    emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        icon: "text-emerald-500"
    }
};

/**
 * Case Study Overview Card - Compact view for main page
 */
const CaseStudyOverview: React.FC<{ onViewDetails: () => void }> = ({ onViewDetails }) => {
    return (
        <div className="bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-blue-900/20 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-2">
                            <Layers className="w-4 h-4" />
                            System Design Case Study
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            JSON-Driven Form Engine
                        </h3>
                        <p className="text-slate-400 text-sm max-w-lg">
                            Led the <strong className="text-white">Build vs Buy</strong> architectural decision
                            for a scalable form system handling 150+ connector integrations at DataHash.
                        </p>
                    </div>
                </div>

                {/* Key Proof Points */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {KEY_METRICS.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-center"
                        >
                            <metric.icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                            <div className="text-xl font-bold text-white">{metric.value}</div>
                            <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Skills Demonstrated */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {['Config-Driven UI', 'Factory Pattern', 'State Machines', 'Plugin Architecture', 'Trade-off Analysis'].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <button
                    onClick={onViewDetails}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors group"
                >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

/**
 * Full Case Study Modal/Detail View
 */
const CaseStudyDetail: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="absolute inset-0 overflow-y-auto">
                <div className="min-h-full py-8 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto relative">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="fixed top-6 right-6 z-50 p-2 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Header */}
                        <div className="mb-12 pt-8">
                            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
                                <Layers className="w-4 h-4" />
                                Architectural Deep-Dive
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Building a Config-Driven Form Engine
                            </h2>
                            <p className="text-slate-400 max-w-3xl text-lg">
                                A comprehensive look at the system design journey—from problem analysis
                                through trade-off evaluation to production implementation.
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                            {KEY_METRICS.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-center group hover:border-blue-500/30 transition-colors"
                                >
                                    <metric.icon className="w-5 h-5 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                                    <div className="text-sm text-slate-400">{metric.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Architecture Journey */}
                        <div className="mb-16">
                            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-blue-500"></span>
                                System Design Journey
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {ARCHITECTURE_PHASES.map((phase, index) => {
                                    const colors = colorClasses[phase.color as keyof typeof colorClasses];
                                    return (
                                        <div
                                            key={phase.title}
                                            className={`${colors.bg} border ${colors.border} rounded-2xl p-6 relative overflow-hidden`}
                                        >
                                            <div className="absolute top-4 right-4 text-5xl font-bold text-slate-800/50">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>

                                            <div className="flex items-start gap-4 mb-4 relative">
                                                <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                                                    <phase.icon className={`w-5 h-5 ${colors.icon}`} />
                                                </div>
                                                <div>
                                                    <h4 className={`font-semibold ${colors.text}`}>{phase.title}</h4>
                                                    <p className="text-sm text-slate-500">{phase.subtitle}</p>
                                                </div>
                                            </div>

                                            <ul className="space-y-2 relative">
                                                {phase.points.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                        <CheckCircle2 className={`w-4 h-4 ${colors.icon} shrink-0 mt-0.5`} />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Decision Matrix + Capabilities */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                            {/* Radar Chart */}
                            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">
                                    Trade-off Analysis: Build vs Buy
                                </h3>
                                <p className="text-xs text-slate-500 text-center mb-4">
                                    Higher values indicate better performance in each dimension
                                </p>
                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={TRADE_OFF_DATA}>
                                            <PolarGrid stroke="#334155" />
                                            <PolarAngleAxis
                                                dataKey="subject"
                                                tick={{ fill: '#94a3b8', fontSize: 11 }}
                                            />
                                            <PolarRadiusAxis
                                                angle={30}
                                                domain={[0, 5]}
                                                tick={false}
                                                axisLine={false}
                                            />
                                            <Radar
                                                name="Off-the-shelf (Formik, Form.io)"
                                                dataKey="ExistingSolution"
                                                stroke="#f59e0b"
                                                fill="#f59e0b"
                                                fillOpacity={0.15}
                                                strokeWidth={2}
                                            />
                                            <Radar
                                                name="Custom System (Built)"
                                                dataKey="CustomSystem"
                                                stroke="#3b82f6"
                                                fill="#3b82f6"
                                                fillOpacity={0.35}
                                                strokeWidth={2}
                                            />
                                            <Legend
                                                wrapperStyle={{ paddingTop: '20px' }}
                                                iconType="circle"
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#1e293b',
                                                    borderColor: '#334155',
                                                    borderRadius: '8px',
                                                    color: '#f8fafc'
                                                }}
                                                itemStyle={{ color: '#e2e8f0' }}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Capabilities */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    Core Architecture Capabilities
                                </h3>
                                {CAPABILITIES.map((cap) => (
                                    <div
                                        key={cap.title}
                                        className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4 hover:border-blue-500/30 transition-colors"
                                    >
                                        <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                            <cap.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">{cap.title}</h4>
                                            <p className="text-sm text-slate-400">{cap.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decision Summary */}
                        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-slate-700/50 rounded-2xl p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-blue-400" />
                                <h3 className="text-xl font-semibold text-white">Decision & Outcome</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-medium text-emerald-400 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Why Custom System Won
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">→</span>
                                            <span><strong className="text-white">150+ forms</strong> with consistent patterns justified upfront investment</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">→</span>
                                            <span><strong className="text-white">Deep OAuth cascades</strong> required custom dependency resolution</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">→</span>
                                            <span><strong className="text-white">Non-engineer editing</strong> eliminated deployment bottlenecks</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">→</span>
                                            <span><strong className="text-white">Long-term ownership</strong> over vendor dependency risk</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-blue-400 mb-3 flex items-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        Production Results
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">→</span>
                                            <span>New form creation: <strong className="text-white">0.5-2 hours</strong> vs 2-8 hours</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">→</span>
                                            <span>Central validation: <strong className="text-white">1 change → all forms</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">→</span>
                                            <span>UI updates: <strong className="text-white">Propagate system-wide</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">→</span>
                                            <span>Scalability: <strong className="text-white">Standardized patterns for team</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Close Button at Bottom */}
                        <div className="text-center pb-8">
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors"
                            >
                                Close Case Study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * Case Study section - Main component combining overview and detail
 */
const CaseStudy: React.FC = () => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    return (
        <section id="case-study" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            {/* Section Header */}
            <SectionHeader number="01" title="Architectural Case Study" className="mb-8" />

            {/* Overview Card */}
            <CaseStudyOverview onViewDetails={() => setIsDetailOpen(true)} />

            {/* Detail Modal */}
            <CaseStudyDetail isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} />
        </section>
    );
};

export default CaseStudy;
