import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sections = ['Action', 'Adventure', 'Science Fiction', 'Fantasy', 'Romance'];
  constructor() {}

  ngOnInit(): void {}

  sampleData(): any {
    return [
      {
        _id: {
          $oid: '5e4a19d67aa06c6054d7fe89'
        },
        budget: {
          $numberInt: '237000000'
        },
        genres:
          '[{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 878, "name": "Science Fiction"}]',
        homepage: 'http://www.avatarmovie.com/',
        id: {
          $numberInt: '19995'
        },
        keywords:
          '[{"id": 1463, "name": "culture clash"}, {"id": 2964, "name": "future"}, {"id": 3386, "name": "space war"}, {"id": 3388, "name": "space colony"}, {"id": 3679, "name": "society"}, {"id": 3801, "name": "space travel"}, {"id": 9685, "name": "futuristic"}, {"id": 9840, "name": "romance"}, {"id": 9882, "name": "space"}, {"id": 9951, "name": "alien"}, {"id": 10148, "name": "tribe"}, {"id": 10158, "name": "alien planet"}, {"id": 10987, "name": "cgi"}, {"id": 11399, "name": "marine"}, {"id": 13065, "name": "soldier"}, {"id": 14643, "name": "battle"}, {"id": 14720, "name": "love affair"}, {"id": 165431, "name": "anti war"}, {"id": 193554, "name": "power relations"}, {"id": 206690, "name": "mind and soul"}, {"id": 209714, "name": "3d"}]',
        original_language: 'en',
        original_title: 'Interstellar',
        overview:
          'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        popularity: {
          $numberDouble: '150.437577'
        },
        production_companies:
          '[{"name": "Ingenious Film Partners", "id": 289}, {"name": "Twentieth Century Fox Film Corporation", "id": 306}, {"name": "Dune Entertainment", "id": 444}, {"name": "Lightstorm Entertainment", "id": 574}]',
        production_countries:
          '[{"iso_3166_1": "US", "name": "United States of America"}, {"iso_3166_1": "GB", "name": "United Kingdom"}]',
        release_date: '2014-12-10',
        revenue: {
          $numberLong: '2787965087'
        },
        runtime: {
          $numberInt: '162'
        },
        spoken_languages:
          '[{"iso_639_1": "en", "name": "English"}, {"iso_639_1": "es", "name": "Espa\\u00f1ol"}]',
        status: 'Released',
        tagline: 'Enter the World of Pandora.',
        title: 'Avatar',
        vote_average: {
          $numberDouble: '7.2'
        },
        vote_count: {
          $numberInt: '11800'
        }
      },
      {
        _id: {
          $oid: '5e4a19d67aa06c6054d7fe89'
        },
        budget: {
          $numberInt: '237000000'
        },
        genres:
          '[{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 878, "name": "Science Fiction"}]',
        homepage: 'http://www.avatarmovie.com/',
        id: {
          $numberInt: '19995'
        },
        keywords:
          '[{"id": 1463, "name": "culture clash"}, {"id": 2964, "name": "future"}, {"id": 3386, "name": "space war"}, {"id": 3388, "name": "space colony"}, {"id": 3679, "name": "society"}, {"id": 3801, "name": "space travel"}, {"id": 9685, "name": "futuristic"}, {"id": 9840, "name": "romance"}, {"id": 9882, "name": "space"}, {"id": 9951, "name": "alien"}, {"id": 10148, "name": "tribe"}, {"id": 10158, "name": "alien planet"}, {"id": 10987, "name": "cgi"}, {"id": 11399, "name": "marine"}, {"id": 13065, "name": "soldier"}, {"id": 14643, "name": "battle"}, {"id": 14720, "name": "love affair"}, {"id": 165431, "name": "anti war"}, {"id": 193554, "name": "power relations"}, {"id": 206690, "name": "mind and soul"}, {"id": 209714, "name": "3d"}]',
        original_language: 'en',
        original_title: 'No Strings Attached',
        overview:
          'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        popularity: {
          $numberDouble: '150.437577'
        },
        production_companies:
          '[{"name": "Ingenious Film Partners", "id": 289}, {"name": "Twentieth Century Fox Film Corporation", "id": 306}, {"name": "Dune Entertainment", "id": 444}, {"name": "Lightstorm Entertainment", "id": 574}]',
        production_countries:
          '[{"iso_3166_1": "US", "name": "United States of America"}, {"iso_3166_1": "GB", "name": "United Kingdom"}]',
        release_date: '2017-12-10',
        revenue: {
          $numberLong: '2787965087'
        },
        runtime: {
          $numberInt: '162'
        },
        spoken_languages:
          '[{"iso_639_1": "en", "name": "English"}, {"iso_639_1": "es", "name": "Espa\\u00f1ol"}]',
        status: 'Released',
        tagline: 'Enter the World of Pandora.',
        title: 'Avatar',
        vote_average: {
          $numberDouble: '7.2'
        },
        vote_count: {
          $numberInt: '11800'
        }
      },
      {
        _id: {
          $oid: '5e4a19d67aa06c6054d7fe89'
        },
        budget: {
          $numberInt: '237000000'
        },
        genres:
          '[{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 878, "name": "Science Fiction"}]',
        homepage: 'http://www.avatarmovie.com/',
        id: {
          $numberInt: '19995'
        },
        keywords:
          '[{"id": 1463, "name": "culture clash"}, {"id": 2964, "name": "future"}, {"id": 3386, "name": "space war"}, {"id": 3388, "name": "space colony"}, {"id": 3679, "name": "society"}, {"id": 3801, "name": "space travel"}, {"id": 9685, "name": "futuristic"}, {"id": 9840, "name": "romance"}, {"id": 9882, "name": "space"}, {"id": 9951, "name": "alien"}, {"id": 10148, "name": "tribe"}, {"id": 10158, "name": "alien planet"}, {"id": 10987, "name": "cgi"}, {"id": 11399, "name": "marine"}, {"id": 13065, "name": "soldier"}, {"id": 14643, "name": "battle"}, {"id": 14720, "name": "love affair"}, {"id": 165431, "name": "anti war"}, {"id": 193554, "name": "power relations"}, {"id": 206690, "name": "mind and soul"}, {"id": 209714, "name": "3d"}]',
        original_language: 'en',
        original_title: 'Avatar',
        overview:
          'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        popularity: {
          $numberDouble: '150.437577'
        },
        production_companies:
          '[{"name": "Ingenious Film Partners", "id": 289}, {"name": "Twentieth Century Fox Film Corporation", "id": 306}, {"name": "Dune Entertainment", "id": 444}, {"name": "Lightstorm Entertainment", "id": 574}]',
        production_countries:
          '[{"iso_3166_1": "US", "name": "United States of America"}, {"iso_3166_1": "GB", "name": "United Kingdom"}]',
        release_date: '2009-12-10',
        revenue: {
          $numberLong: '2787965087'
        },
        runtime: {
          $numberInt: '162'
        },
        spoken_languages:
          '[{"iso_639_1": "en", "name": "English"}, {"iso_639_1": "es", "name": "Espa\\u00f1ol"}]',
        status: 'Released',
        tagline: 'Enter the World of Pandora.',
        title: 'Avatar',
        vote_average: {
          $numberDouble: '7.2'
        },
        vote_count: {
          $numberInt: '11800'
        }
      },
      {
        _id: {
          $oid: '5e4a19d67aa06c6054d7fe89'
        },
        budget: {
          $numberInt: '237000000'
        },
        genres:
          '[{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 878, "name": "Science Fiction"}]',
        homepage: 'http://www.avatarmovie.com/',
        id: {
          $numberInt: '19995'
        },
        keywords:
          '[{"id": 1463, "name": "culture clash"}, {"id": 2964, "name": "future"}, {"id": 3386, "name": "space war"}, {"id": 3388, "name": "space colony"}, {"id": 3679, "name": "society"}, {"id": 3801, "name": "space travel"}, {"id": 9685, "name": "futuristic"}, {"id": 9840, "name": "romance"}, {"id": 9882, "name": "space"}, {"id": 9951, "name": "alien"}, {"id": 10148, "name": "tribe"}, {"id": 10158, "name": "alien planet"}, {"id": 10987, "name": "cgi"}, {"id": 11399, "name": "marine"}, {"id": 13065, "name": "soldier"}, {"id": 14643, "name": "battle"}, {"id": 14720, "name": "love affair"}, {"id": 165431, "name": "anti war"}, {"id": 193554, "name": "power relations"}, {"id": 206690, "name": "mind and soul"}, {"id": 209714, "name": "3d"}]',
        original_language: 'en',
        original_title: 'Mission Impossible',
        overview:
          'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        popularity: {
          $numberDouble: '150.437577'
        },
        production_companies:
          '[{"name": "Ingenious Film Partners", "id": 289}, {"name": "Twentieth Century Fox Film Corporation", "id": 306}, {"name": "Dune Entertainment", "id": 444}, {"name": "Lightstorm Entertainment", "id": 574}]',
        production_countries:
          '[{"iso_3166_1": "US", "name": "United States of America"}, {"iso_3166_1": "GB", "name": "United Kingdom"}]',
        release_date: '2009-12-10',
        revenue: {
          $numberLong: '2787965087'
        },
        runtime: {
          $numberInt: '162'
        },
        spoken_languages:
          '[{"iso_639_1": "en", "name": "English"}, {"iso_639_1": "es", "name": "Espa\\u00f1ol"}]',
        status: 'Released',
        tagline: 'Enter the World of Pandora.',
        title: 'Avatar',
        vote_average: {
          $numberDouble: '7.2'
        },
        vote_count: {
          $numberInt: '11800'
        }
      }
    ];
  }
}
