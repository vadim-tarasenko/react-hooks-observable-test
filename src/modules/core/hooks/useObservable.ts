import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

type DataType = object | string | number | boolean | undefined | null;

function useObservable<T, S>(
  subject: BehaviorSubject<T>,
  selector?: (obj: T) => S
) {
  const select = (obj: T): S extends DataType ? S : T => {
    // @ts-ignore
    return selector ? selector(obj) : obj;
  };

  const [val, setVal] = useState(select(subject.value));

  const updateValue = (nextValue: T) => {
    const newValue = select(nextValue);

    if (JSON.stringify(val) !== JSON.stringify(newValue)) {
      setVal(newValue);
    }
  };

  useEffect(() => {
    const subscription = subject.subscribe(updateValue);

    return () => {
      subscription.unsubscribe();
    };
  }, [subject, updateValue]);

  return val;
}

export { useObservable };
