import React from 'react';
interface ISection {
  bgcolor?: string;
  title: string;
  paragraph: string;
  image: string;
}

const Section: React.FC<ISection> = ({ bgcolor, title, paragraph, image, children }) => {
  let bg = !bgcolor ? 'white' : 'secondary';
  let text = !bgcolor ? 'dark' : 'white';
  let borderColor = !bgcolor ? 'secondary' : 'primary';
  return (
    <section className={`px-6 py-20 bg-${bg} text-${text}  `}>
      <div className='container mx-auto flex items-center'>
        <div className='flex-1'>
          <h2 className={`text-2xl sm:text-3xl border-l-4 border-${borderColor} pl-4 mb-4`}>
            {title}
          </h2>
          <p className='font-light sm:text-lg'>{paragraph}</p>
          {children}
        </div>
        <div className='hidden lg:flex flex-1 justify-end'>
          <img className='max-w-xs' src={image} alt='' />
        </div>
      </div>
    </section>
  );
};
export { Section };
