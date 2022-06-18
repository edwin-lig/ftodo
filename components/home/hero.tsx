import Animation from './animation';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font lg:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          您好
          <br />
          前端开发人员
          <br className='' />
          <br className='hidden lg:inline-block' />
          我是李凡
        </h1>
        <p className='mb-8 leading-relaxed'>
        专攻视觉设计，对用户体验和设计很敏感。
          <br />
          喜欢学习和挑战新技术和趋势。
          <br />
          相信沟通的重要性。
          <br />
          以成为比昨天更好的人为目标，不断学习。
        </p>
        
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
