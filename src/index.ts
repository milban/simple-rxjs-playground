import { of } from '@reactivex/rxjs/dist/package';
import { map } from '@reactivex/rxjs/dist/package/internal/operators';

const app = () => {
  of(1, 2, 3)
    .pipe(map((x) => x + '!!!'))
    .subscribe((value) => console.log(value + 'nodemon'));
};

app();
