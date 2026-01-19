import businessMan from '../assets/bussiness-man.png';
import webAnalytics from '../assets/web-analytics.png';
import predictiveAnalytics from '../assets/predictive-chart.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const News = () => {
    const navigate = useNavigate();
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    
    useEffect(() => {
        document.title = "NewsPin - News";
    }, []);

    return (
        // h-screen과 overflow-hidden을 사용하여 전체 화면 스크롤 방지
        <div className="w-full h-screen bg-blue-700 flex flex-col items-center p-4 md:p-6 font-agbalumo overflow-hidden">
            
            {/* [상단 헤더 영역] - 간격을 mb-14에서 mb-6으로 줄여 공간 확보 */}
            <div className="w-full max-w-6xl flex justify-between items-start mb-6 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="relative w-80 h-20">
                        <img src={predictiveAnalytics} alt="analysis" className='absolute w-16 -top-8 left-16 drop-shadow-md' />
                        <img src={businessMan} alt="man" className="absolute w-16 left-4 drop-shadow-md" />
                        <img src={webAnalytics} alt="chart" className="absolute left-32 w-16 drop-shadow-md" />
                    </div>
                    <h1 className="text-white text-6xl font-agbalumo italic tracking-tight font-serif ml-4 flex">NewsPin</h1>
                </div>

                <div className="text-white flex gap-4 text-lg mt-2 font-bold">
                    <button className="hover:opacity-70 cursor-pointer">내 정보</button>
                    <span>|</span>
                    <button className="hover:opacity-70 cursor-pointer">로그아웃</button>
                </div>
            </div>

            {/* [메인 컨텐츠 영역] - flex-1과 overflow-hidden으로 내부 요소 크기 자동 조절 */}
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 border-4 border-gray-400 flex-1 overflow-hidden mb-2">
                
                {/* 1. 뉴스 상단부: 로고와 뉴스 본문 (높이 고정하여 하단 영역 확보) */}
                <div className="flex flex-col md:flex-row gap-6 border-b-2 border-gray-200 pb-4 h-[45%] shrink-0">
                    <div className="w-full md:w-1/3 border-2 border-gray-300 rounded-lg flex items-center justify-center p-4 h-full bg-gray-50">
                        <div className="text-3xl font-bold flex items-center gap-2">
                             <span className="text-4xl text-orange-400">+</span>
                             <span className="text-green-700 uppercase">GC Biopharma</span>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col h-full">
                        <h2 className="text-xl font-bold mb-2 truncate">코로나19에도 '위기가 곧 기회' 외친 국내 제약사들</h2>
                        {/* 뉴스 본문 전용 스크롤바 */}
                        <div className="text-[15px] leading-relaxed text-gray-800 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 flex-1">
                            <p className="mb-3">국내 주요 제약사들이 2021년 신축년 새해 다짐을 예년과 달리 별도의 행사 없이 온라인으로 간소화했지만 혁신과 성장을 위한 외침에는 변함이 없었다.</p>
                            <p className="mb-3">지난해에 이어 올해도 코로나19(COVID-19) 팬데믹이 여전하지만 '위기가 곧 기회'라는 자세로 성장동력 발굴, 스마트 경영, 제약강국 실현 등의 의지 다진 것이다.</p>
                            <p className="mb-3">단, 코로나19의 여파로 대부분의 제약사가 온라인으로 신년인사를 대체한 것이 올해 시무식 공통적인 특징이다. GC녹십자는 '어려울 때 꼭 필요한 회사가 되자'는 다짐을 통해 올해 첫 근무를 시작했다.</p>
                            <p>GC녹십자 허은철 사장은 "예고 없이 찾아오는 위기에 대응하고 기회를 놓치지 않기 위해 늘 성실히 준비하는 행동을 바탕으로 내실 있는 회사가 돼야 한다"며 "포스트 코로나 시대를 대비하고 시대적 요청에 부응하는 회사가 되도록 항상 깨어 있어야 한다"고 강조했다.</p>
                        </div>
                    </div>
                </div>

                {/* 2. 하단부: 분석 결과 및 코멘트 (남은 공간 차지) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 overflow-hidden">
                    {/* 왼쪽 섹션 */}
                    <div className="md:col-span-3 flex flex-col gap-3 h-full overflow-hidden">
                        <div className="flex gap-2 shrink-0">
                            <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-bold text-lg shadow-md cursor-pointer hover:bg-indigo-700 transition-colors">호재</button>
                            <button className="flex-1 bg-red-500 text-white py-2 rounded-lg font-bold text-lg shadow-md cursor-pointer hover:bg-red-600 transition-colors">악재</button>
                        </div>
                        
                        <div className="border-2 border-black rounded-lg p-3 bg-white flex-1 overflow-y-auto">
                            <div className="flex items-center gap-1 mb-1 font-bold text-sm italic shrink-0">
                                💡 판단 근거 코멘트
                            </div>
                            <p className="text-[13px] leading-snug text-gray-700">
                                코로나19라는 외부 위기 상황에도 불구하고, 제약사들이 이를 성장의 기회로 인식하고 연구개발과 혁신을 강화하려는 의지를 보였다. 단기적으로는 시장 불확실성이 있지만, 산업 전반의 혁신 기조는 긍정적이라고 판단된다.
                            </p>
                        </div>
                        
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer hover:bg-blue-600 shrink-0">
                            <span className="text-lg">📄</span> 의견 제출
                        </button>
                    </div>

                    {/* 오른쪽 섹션: AI 분석 결과 */}
                    <div className="md:col-span-9 border-2 border-black rounded-lg p-4 bg-white flex flex-col h-full overflow-hidden">
                        <div className="flex items-center gap-2 mb-2 shrink-0">
                            <img src={webAnalytics} alt="icon" className="w-6 h-6" />
                            <h3 className="font-bold text-xl">AI 분석 결과</h3>
                        </div>

                        <div className="border-2 border-gray-300 p-4 rounded-lg text-sm leading-relaxed flex-1 overflow-y-auto">
                            <div className="mb-4">
                                <p className="font-bold text-blue-800">AI 감성 분석 결과:</p>
                                <ul className="list-disc list-inside ml-2 text-gray-800">
                                    <li>긍정 점수 0.74 / 부정 점수 0.26 → <span className="font-bold text-indigo-600">호재로 분류</span></li>
                                    <li>주요 긍정 키워드: <span className="underline">"기회", "성장동력", "혁신", "내실"</span></li>
                                </ul>
                            </div>
                            
                            <div>
                                <p className="font-bold text-blue-800">AI 코멘트:</p>
                                <p className="text-gray-800 text-[13.5px]">
                                    이 뉴스는 팬데믹으로 인한 단기적 어려움 속에서도, 제약업계가 위기를 성장의 계기로 삼으려는 적극적 기업 태도를 강조하고 있습니다. 긍정적 의미의 단어가 압도적으로 많아 산업 전반에는 호재 영향을 줄 가능성이 높습니다. 단, 실제 투자 관점에서는 장기 비전 중심의 판단이 필요합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. 최하단 제어 버튼 (고정 높이) */}
                <div className="flex justify-center gap-8 py-2 shrink-0">
                    <button className="bg-red-500 text-white px-10 py-2 rounded-xl font-bold text-lg shadow-lg cursor-pointer hover:bg-red-600 active:translate-y-0.5 transition-all flex items-center gap-2">
                         <span className="bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">→</span> 학습 종료
                    </button>
                    <button className="bg-indigo-600 text-white px-10 py-2 rounded-xl font-bold text-lg shadow-lg cursor-pointer hover:bg-indigo-700 active:translate-y-0.5 transition-all flex items-center gap-2">
                         <span>↺</span> 재학습
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;