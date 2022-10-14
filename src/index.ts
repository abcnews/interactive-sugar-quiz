import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import Question from './components/Question/Question.svelte';
import Report from './components/Report/Report.svelte';
import QUESTIONS from './lib/questions';
import { scores } from './lib/stores';

whenOdysseyLoaded.then(() => {
  const mounts = selectMounts('sugar').map(el => {
    const [, componentName, variant] = getMountValue(el).split(':');
    return {
      el,
      componentName,
      variant
    };
  });
  const questionsMounts = mounts.filter(
    ({ componentName, variant }) => componentName === 'question' && !!QUESTIONS[variant]
  );
  const reportMount = mounts.find(({ componentName }) => componentName === 'report');

  scores.set(questionsMounts.map(() => null));

  questionsMounts.forEach((mount, index) => {
    new Question({
      target: mount.el,
      props: {
        index,
        questionKey: mount.variant
      }
    });
  });

  if (reportMount) {
    new Report({
      target: reportMount.el,
      props: {}
    });
  }
});
