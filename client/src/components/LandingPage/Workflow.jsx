import codeImg from '../../assets/code.jpg';
import { CheckCircle2 } from 'lucide-react';
import { checklistItems } from '../../constants';

const Workflow = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
        Accelerate your <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>coding Workflow</span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2'>
          <img src={codeImg} alt='Code' />
        </div>
        <div className='pt-12 w-full lg:w-1/2'>
          {checklistItems.map((item, index) => (
            <div key={index} className='flex items-center mb-6'>
              <div className='text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                <CheckCircle2 />
              </div>
              <div className='ml-4'>
                <h5 className='text-xl'>{item.title}</h5>
                <p className='text-md text-neutral-500'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
