import { useState } from 'react';
import ClassTypeCard from './ClassTypeCard';
import beginnerImg from '../assets/beginner.png';
import intermediateImg from '../assets/intermediate.png';
import advancedImg from '../assets/advanced.png';

const classData = [
  {
    id: 'beginner',
    title: 'Beginner',
    image: beginnerImg,
    description: 'Learn the basics of hand stitching, sewing machines, and fabric prep.',
    ageGroup: 'Ages 11+',
    whatToExpect: 'Hands-on help, simple stitching projects, and learning to use a machine.',
    price: '$50 per class',
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    image: intermediateImg,
    description: 'Dive into pattern making, garment assembly, and creative projects.',
    ageGroup: 'Ages 15+',
    whatToExpect: 'Design your own patterns and start real wearable pieces.',
    price: '$65 per class',
  },
  {
    id: 'advanced',
    title: 'Advanced',
    image: advancedImg,
    description: 'Master finishing techniques, custom designs, and advanced sewing tools.',
    ageGroup: 'Ages 18+',
    whatToExpect: 'Special fashion dresses class, learn the ins and outs of sowing dresses!',
    price: '$80 per class',
  },
];

const Classes = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section className="py-5 text-center" style={{ backgroundColor: '#ffe4e6' }}>
      <div className="container px-4">
        <h2 className="h1 fw-semibold mb-4" style={{ color: 'pink' }}>
          What You'll Learn
        </h2>
        <div className="row g-4">
          {classData.map((cls) => (
           <div className="col-12 col-sm-6 col-lg-4" key={cls.id}>
              <ClassTypeCard
                title={cls.title}
                image={cls.image}
                description={cls.description}
                isSelected={selectedCard === cls.id}
                onClick={() => setSelectedCard(cls.id)}
                extra={{
                  ageGroup: cls.ageGroup,
                  whatToExpect: cls.whatToExpect,
                  price: cls.price,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
