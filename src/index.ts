import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import Question from '$components/Question/Question.svelte';
import Score from '$components/Score/Score.svelte';
import '$components/root.css';
import { QUESTIONS } from '$lib/data';
import { distances } from '$lib/stores';

type Mount = {
  el: HTMLElement;
  componentName: string;
  variant: string;
};

whenOdysseyLoaded.then(() => {
  const mounts: Mount[] = selectMounts('sugar').map(el => {
    const [, componentName, variant] = getMountValue(el).split(':');
    return {
      el: el as unknown as HTMLElement,
      componentName,
      variant
    };
  });
  const questionsMounts = mounts.filter(
    ({ componentName, variant }) => componentName === 'question' && !!QUESTIONS[variant]
  );
  const scoreMount = mounts.find(({ componentName }) => componentName === 'score');

  distances.set(questionsMounts.map(() => null));

  questionsMounts.forEach((mount, index) => {
    new Question({
      target: mount.el,
      props: {
        index,
        questionKey: mount.variant
      }
    });
  });

  if (scoreMount) {
    scoreMount.el.style.setProperty('bottom', '0');
    scoreMount.el.style.setProperty('position', 'sticky');
    new Score({
      target: scoreMount.el,
      props: {}
    });
  }
});
