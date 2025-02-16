import { TextLoop } from '../components/ui/text-loop';

export function TextLoopCustomVariantsTransition() {
  return (
    <p className='inline-flex whitespace-pre-wrap text-xl sm:text-1xl md:text-2xl lg:text-3xl font-lighjt'>
      Computer Engineer & {' '}
      <TextLoop
        className='overflow-y-clip'
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: 'blur(4px)',
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: 'blur(4px)',
          },
        }}
      >
        <span>Editor</span>
        <span>Desginer</span>
        <span>Game Developer</span>
        <span>Aerospace Enthusiast</span>
      </TextLoop>
    </p>
  );
}