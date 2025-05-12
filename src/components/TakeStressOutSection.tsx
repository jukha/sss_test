import CardVariant1 from './CardVariant1';
import Container from './Container';
import Typography from './Typography';
import {
    CheckMarkIcon,
    HomeIcon,
    PlannerIcon,
} from '@/components/icons';

const TakeStressOutSection = () => {
    const benefits = [
        {
            image: <HomeIcon />,
            title: 'Convenient At-Home Lessons',
            desc: 'Our instructors come to your pool at a time that works for you, eliminating the hassle of driving back and forth to swim lessons and scheduling multiple students back-to-back!',
            direction: 'lt',
            bgColor: '#c7eaf3',
            opacity: 0.5,
        },
        {
            image: <CheckMarkIcon />,
            title: 'Learn to Swim Guarantee',
            desc: 'We guarantee your child (aged 3+) will swim to the pool’s edge unassisted after a minimum of 12 lessons in our Learn to Swim Guarantee package (3x per week).',
            direction: 'rt',
            bgColor: '#fedf46',
            opacity: 1,
        },
        {
            image: <PlannerIcon />,
            title: 'Flexible Scheduling',
            desc: 'Busy schedule? No problem! We work around your availability, offering private at-home swim lessons at times that work best for your family.',
            direction: 'rt',
            bgColor: '#c7eaf3',
            opacity: 0.5,
        },
    ];


    return (
        <Container>
            <div className='flex flex-col gap-16 py-[100px] justify-start items-center'>
                <div className='flex flex-col gap-2'>
                    <Typography variant='h2' className='max-w-[837px] text-center'>
                        Take the Stress Out of Learning to Swim
                    </Typography>
                    <Typography
                        variant='body1'
                        className='font-bold max-w-[762px]  text-center leading-[125%]'
                    >
                        No more long drives, crowded swim schools, or inconvenient schedules— make learning to swim easy, effective, and stress-free with lessons at your home or community pool.
                    </Typography>
                </div>
                {/* Steps cards container - displays process steps */}
                <div className='flex justify-center gap-[25px] lg:gap-8 flex-wrap items-center'>
                    {benefits.map((el, index) => {
                        return (
                            <CardVariant1
                                key={index}
                                title={el.title}
                                description={el.desc}
                                opacity={el.opacity}
                                bgColor={el.bgColor}
                                icon={el.image}
                                direction={el.direction}
                            />
                        );
                    })}
                </div>
            </div>
        </Container>
    )
};

export default TakeStressOutSection;