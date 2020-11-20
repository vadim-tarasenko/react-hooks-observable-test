import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

function useObservable<T>(subject: BehaviorSubject<T>): T {
  const [val, setVal] = useState(subject.value);

  useEffect(() => {
    const subscription = subject.subscribe(setVal);

    return () => {
      subscription.unsubscribe();
    };
  }, [subject]);

  return val;
}

export { useObservable };
