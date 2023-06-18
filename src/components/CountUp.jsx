import CountUp from 'react-countup';

const Count = () => {
    return (
        <section className="bg-[#00abe4] mt-[140px] grid md:grid-cols-3 gap-5 px-10">
            <div className='flex justify-center items-center h-[100px] flex-col text-2xl font-bold text-white'>
                <h2>Products</h2>
                <CountUp start={0} end={250} delay={0}>
                {({ countUpRef }) => (
                  <div >
                    <span ref={countUpRef} />
                  </div>
                )}
                </CountUp>
            </div>
            <div className='flex justify-center items-center h-[100px] flex-col text-2xl font-bold text-white'>
                <h2>Customers</h2>
                <CountUp start={0} end={12000} delay={0}>
                {({ countUpRef }) => (
                  <div >
                    <span ref={countUpRef} />
                  </div>
                )}
                </CountUp>
            </div>
            <div className='flex justify-center items-center h-[100px] flex-col text-2xl font-bold text-white'>
                <h2>Happy</h2>
                <CountUp start={0} end={3000} delay={0}>
                  {({ countUpRef }) => (
                    <div >
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
            </div>

        </section>
    );
};

export default Count;