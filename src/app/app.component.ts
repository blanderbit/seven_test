import { Component } from '@angular/core';
import { IProfile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profiles: IProfile[] = [
    new IProfile({
      name: 'test',
      surname: 'testovich',
      username: 'delux',
      country: 'en',
      aboutMe: 'UI\\UX Designer, Web Designer,\n' +
        'Mobile App Designer, UI\\UX Designer, Web Designer,Mobile App Designer',
      city: 'Zaporozhzhye',
      reviews: {
        rating: 3,
        count: 242
      },
      profilePicture: 'https://photocasa.ru/uploads/posts/2015-10/1444686025_typrmeuhg58.jpg',
      isOwnProfile: true,
      languages: ['zh', 'en', 'fr', 'de', 'pt', 'ru', 'uk', 'tr'],
    }),
    new IProfile({
      name: 'test',
      surname: 'testovich',
      username: 'delux',
      country: 'en',
      aboutMe: 'UI\\UX Designer, Web Designer,\n' +
          'Mobile App Designer, UI\\UX Designer, Web Designer,Mobile App Designer',
      city: 'Zaporozhzhye',
      reviews: {
        rating: 1,
        count: 242
      },
      profilePicture: 'https://photocasa.ru/uploads/posts/2015-10/1444686025_typrmeuhg58.jpg',
      isOwnProfile: true,
      languages: ['zh', 'en', 'fr', 'de', 'pt', 'ru', 'uk']
    }),
    new IProfile({
      name: 'test',
      surname: 'testovich',
      username: 'delux',
      country: 'en',
      aboutMe: 'UI\\UX Designer, Web Designer,\n' +
          'Mobile App Designer, UI\\UX Designer, Web Designer,Mobile App Designer',
      city: 'Zaporozhzhye',
      reviews: {
        rating: 5,
        count: 242
      },
      profilePicture: 'https://photocasa.ru/uploads/posts/2015-10/1444686025_typrmeuhg58.jpg',
      isOwnProfile: true,
      languages: ['zh', 'en', 'fr']
    }),
    new IProfile({
      name: 'test',
      surname: 'testovich',
      username: 'delux',
      country: 'en',
      aboutMe: 'UI\\UX Designer, Web Designer,\n' +
          'Mobile App Designer, UI\\UX Designer, Web Designer,Mobile App Designer',
      city: 'Zaporozhzhye',
      reviews: {
        rating: 3,
        count: 242
      },
      profilePicture: 'https://photocasa.ru/uploads/posts/2015-10/1444686025_typrmeuhg58.jpg',
      isOwnProfile: true,
      languages: ['zh', 'en', 'fr', 'pt']
    })
  ];
}
