import React from 'react';
import businessMan from '../assets/bussiness-man.png'; 
import webAnalytics from '../assets/web-analytics.png';

const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
      
      {/* 부모 카드: 850px 너비 고정 및 가로 배치 */}
      <div className="bg-white rounded-3xl border border-gray-200 flex flex-row items-stretch w-full max-w-4xl h-[450px] overflow-hidden shadow-2xl">
        
        {/* [왼쪽 섹션] 브랜드 컬러와 서비스 소개 */}
        <div className="flex-1 bg-[#5D6DED] p-10 text-white flex flex-col justify-center items-center shrink-0">
          <h1 className="text-4xl font-bold italic mb-8 tracking-wider">NewsPin</h1>
          
          {/* 이미지 레이어링: 상대 위치 조정 */}
          <div className="relative w-32 h-24 mb-6">
            <img 
              src={businessMan} 
              alt="man" 
              className="w-16 h-auto z-20 absolute left-2 bottom-0 drop-shadow-lg" 
            />
            <img 
              src={webAnalytics} 
              alt="chart" 
              className="w-24 h-auto z-10 opacity-80 absolute right-0 top-0" 
            />
          </div>

          <p className="text-center text-[11px] leading-relaxed font-medium opacity-95">
            NewsPin은 뉴스 기반 투자 학습 플랫폼입니다.
            <br />
            경제 뉴스를 읽고 호재 및 악재를 판단하며,
            <br />
            AI 피드백으로 분석 감각을 키워보세요.
            <br />
            실제 데이터를 활용한 모의 투자로 안전한 학습을 경험하세요.
          </p>
        </div>

        {/* [오른쪽 섹션] 로그인 폼 */}
        <div className="flex-1 p-12 flex flex-col justify-center bg-white shrink-0">
          <h2 className="text-xl font-bold text-center mb-8 text-gray-800">로그인</h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-600 ml-1">아이디</label>           
              <input 
                type="text" 
                placeholder="아이디를 입력해주세요." 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none text-[11px] bg-gray-50 focus:border-[#5D6DED] focus:ring-1 focus:ring-[#5D6DED] transition-all"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-600 ml-1">비밀번호</label>
              <input 
                type="password" 
                placeholder="비밀번호를 입력해주세요." 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none text-[11px] bg-gray-50 focus:border-[#5D6DED] focus:ring-1 focus:ring-[#5D6DED] transition-all"
              />
            </div>

            <button className="w-full bg-[#6C7EEB] text-white font-bold py-2.5 rounded-lg text-xs mt-4 shadow-md hover:bg-[#5A6CD1] active:scale-[0.98] transition-all">
              시작하기
            </button>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
            </div>
          </form>

          <div className="flex justify-center gap-4 text-[10px] text-gray-400 font-medium">
            <button className="hover:text-gray-600 transition-colors">회원가입</button>
            <span className="text-gray-200">|</span>
            <button className="hover:text-gray-600 transition-colors">비밀번호 찾기</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;