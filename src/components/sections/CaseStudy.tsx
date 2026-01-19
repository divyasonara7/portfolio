import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { TRADE_OFF_DATA } from '@/constants';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui';

/**
 * Case Study section - Architectural decision showcase
 * Features interactive radar chart comparing Build vs Buy decision
 */
const CaseStudy: React.FC = () => {
    return (
        <section id="case-study" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-12">
                <SectionHeader number="01" title="Architectural Case Study" className="mb-0" />
                <p className="text-slate-400 max-w-3xl">
                    At Simform (DataHash), I led the decision to build a custom <strong>JSON-driven Form Engine</strong> versus using off-the-shelf libraries.
                    This analysis defined the product's scalability for 3+ years.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visualization */}
                <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 h-[400px] w-full flex flex-col">
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">
                        Decision Matrix: Build vs Buy
                    </h3>
                    <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={TRADE_OFF_DATA}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 5]} tick={false} axisLine={false} />
                                <Radar
                                    name="Existing Solutions (Formik)"
                                    dataKey="ExistingSolution"
                                    stroke="#ef4444"
                                    fill="#ef4444"
                                    fillOpacity={0.2}
                                />
                                <Radar
                                    name="Custom System (DataHash)"
                                    dataKey="CustomSystem"
                                    stroke="#3b82f6"
                                    fill="#3b82f6"
                                    fillOpacity={0.4}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Textual Analysis */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">The Problem</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            We needed to support <strong>150+ connector forms</strong> with complex OAuth cascades.
                            The requirement was for non-engineers to modify form logic via configuration without code deployments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Why we rejected Buy */}
                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl">
                            <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                                <XCircle size={16} /> Why we rejected 'Buy'
                            </h4>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li>• Hard to customize deep logic deeply.</li>
                                <li>• Vendor breaking changes risk.</li>
                                <li>• Generic integration, not optimized for our API stack.</li>
                            </ul>
                        </div>

                        {/* Why we chose Build */}
                        <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl">
                            <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                                <CheckCircle size={16} /> Why we chose 'Build'
                            </h4>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li>• 100% control over maintenance.</li>
                                <li>• Tailored config schema for our backend.</li>
                                <li>• Non-developers can modify forms safely.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Outcome */}
                    <div className="pt-4 border-t border-slate-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="block text-xs text-slate-500 uppercase">Outcome</span>
                                <span className="text-lg font-medium text-white">Scalable Config-Driven Architecture</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                                Read full analysis <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
