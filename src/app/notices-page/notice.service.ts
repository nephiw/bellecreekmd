import { Injectable } from '@angular/core';
import { Notice } from './notice';

const notices = [
  new Notice({
    date: '2018-05-19',
    title: 'Reservoir Mosquitos?!',
    excerpt: 'Due to the reports of mosquitos near the newly filled Tanabe Reservoir, Denver Water did perform ' +
      'a site visit to further investigate the situation. Staff observed flying insects, identified as ' +
      'non-biting midges, near the water and to a lesser extent near the caretaker’s road. These midges ' +
      'are commonplace throughout the region from spring through fall and are not something that Denver ' +
      'Water would mitigate near a reservoir, as it would require pesticide use.',
    path: 'reservoir-mosquitos',
    file: '/assets/notices/2018_mosquitos.md'
  }),
  new Notice({
    date: '2018-01-31',
    title: 'A Call for Nominations',
    excerpt: '<strong>Notice is hereby given</strong> that an election will be held on Tuesday, May 8, 2018, ' +
      'between the hours of 7:00 a.m. and 7:00 p.m. At that time, two (2) directors will be elected to ' +
      'serve four-year terms. Eligible electors of the Belle Creek Metropolitan District No. 1 interested ' +
      'in serving on the board of directors may download a Self-Nomination and Acceptance form or obtain ' +
      'from the District Designated Election Official (DEO)',
    path: 'a-call-for-nominations',
    file: '/assets/notices/2018_join_board.md'
  }),
  new Notice({
    date: '2017-08-30',
    title: 'Tanabe Reservoir August Update',
    excerpt: 'Denver Water has started a $5 million investment into its property next to Belle Creek. This ' +
      'project will facilitate future operation of the Tanabe reservoir, which will be located on that ' +
      'land. They are working on the existing fence, putting in private road improvements and adding a ' +
      'few water control structures. Another major part of the project not seen on the following map is ' +
      'a large amount of electrical work that will need to happen before we can operate the reservoir.',
    path: 'tanabe-reservoir-august-update',
    file: '/assets/notices/august_water_district.md'
  }),
  new Notice({
    date: '2017-08-03',
    title: 'Know the Laws of the Streets',
    excerpt: 'The Covenant Enforcement Committee (CEC) has heard many questions about street parking and traffic ' +
      'problems. School is about to start so we are about to have a lot more cars and kids on the roads. You ' +
      'will likely know most of these, but lets work to keep these streets safe and friendly.',
    path: 'know-the-laws-of-the-streets',
    file: '/assets/notices/2017_street_use_notice.md'
  }),
  new Notice({
    date: '2017-06-09',
    title: 'Yard Sale 2017 Map',
    excerpt: 'Come join us for the Belle Creek Community Yard Sale and find yourself some new-to-you clothes, ' +
      'kitchenware, toys, tools, knick knacks and much more. Here is a map of all of the locations that ' +
      'registered and a breif summary of things that they will be selling. Children from the community ' +
      'will also be selling snow cones as well as baked goods in the park.',
    path: 'yard-sale-2017-map',
    file: '/assets/notices/2017_spring_yard_sale_map.md'
  }),
  new Notice({
    date: '2017-06-01',
    title: 'Proxy Raffle Winners',
    excerpt: 'The winner of the $500 home depot gift card is Nicholas Barda. The winner of the $100 gift card is ' +
      'Ricky Boatman. The winners of the $50 gift card are Donald and Susan Richards. Congratulations! Contact ' +
      'Laurie Tatlock at laurie@mulhernmre.com to arrange for delivery of your prize.',
    path: 'proxy-raffle-winners',
    file: '/assets/notices/2017_proxy_raffle_winners.md'
  }),
  new Notice({
    date: '2017-05-30',
    title: 'Spring Yard Sale 2017',
    excerpt: 'Looking for some gently used baby clothes, kitchen gadgets, tools, toys, or collectables? On Saturday, ' +
      'June 10th, Belle Creek will be having a community wide yard sale. If you live in the community it will ' +
      'be a great day to sell things you no longer want or need. Even if you don\'t live in the community, come ' +
      'by and see what we are selling. There should be a lot of great finds available all in one small community.',
    path: 'spring-yard-sale-2017',
    file: '/assets/notices/2017_spring_yard_sale.md'
  }),
  new Notice({
    date: '2017-05-16',
    title: 'Tanabe Reservoir May Update',
    excerpt: 'Denver Water has confirmed that the Tanabe Reservoir project will be constructed starting this July with ' +
      'construction continuing until November. The exact construction dates should be available in early June.',
    path: 'tanabe-reservoir-may-update',
    file: '/assets/notices/may_water_district.md'
  }),
  new Notice({
    date: '2017-04-27',
    title: 'Spring Cleaning 2017',
    excerpt: 'Get your home and garden ready for the season with the following events. Proof of Commerce City Residency ' +
      'required at all events. No businesses or contractors allowed. Visit c3gov.com/trash for more information.',
    path: 'spring-cleaning-2017',
    file: '/assets/notices/2017_spring.md'
  }),
  new Notice({
    date: '2017-04-26',
    title: 'Spring Meeting 2017',
    excerpt: 'The meeting agenda will include the following matters: 1. Commerce City Police; 2. Commerce City Trash ' +
      'and Recycling; 3. Covenant Enforcement Committee; 4. YMCA; 5. HOA Dissolution; 6. Community Outreach Website; ' +
      '7. Community Comments/Concerns/Questions',
    path: 'spring-meeting-2017',
    file: '/assets/notices/2017_spring_meeting.md'
  }),
  new Notice({
    date: '2017-03-19',
    title: 'Newtown Home Window Warranty',
    excerpt: '[EDIT] - It has been reported that "Atrium Windows and Doors" now answers the phone as "Prime Window Sales" ' +
      'and no longer do after warranty work with residents - only builders. They suggested that you call Glass Unlimited: ' +
      '720-427-4085. The metro district has not worked with Glass Unlimited, it is the recommendation of Prime Window Sales.',
    path: 'newtown-home-window-warranty',
    file: '/assets/notices/newtown_windows.md'
  }),
  new Notice({
    date: '2017-02-16',
    title: 'Tanabe Reservoir Update',
    excerpt: 'The final construction at this site, which will occur from July to November of 2017, is a $5 million investment into ' +
      'the property that will facilitate future operation of the reservoir. As you can see from the map, Denver Water is ' +
      'working on the existing fence, putting in road improvements and adding a few water control structures. Another major ' +
      'part of the project not seen on the map is a large amount of electrical work that will need to happen before they can ' +
      'operate the reservoir.',
    path: 'tanabe-reservoir-update',
    file: '/assets/notices/water_district.md'
  }),
  new Notice({
    date: '2016-02-16',
    title: 'Dissolution',
    excerpt: 'Belle Creek Metropolitan District No. 1 ("District") staff and legal counsel have advised the District Board that it ' +
      'would be a good idea to dissolve the Belle Creek Master Association ("Association"). This Association is no longer ' +
      'active, but it costs thousands of dollars per year to operate. If dissolved, this community will keep all of the same ' +
      'rules that it has today.',
    path: 'dissolution',
    file: '/assets/notices/dissolution.md'
  })
];

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  public async getNotices(): Promise < Notice[] > {
    return Promise.resolve(notices);
  }

  public async getNoticeByPath(path: string): Promise < Notice > {
    const notice: Notice = notices.find((note) => {
      return note.path === path;
    });
    return Promise.resolve(notice);
  }
}
