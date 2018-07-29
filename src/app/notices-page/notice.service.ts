import { Injectable } from '@angular/core';
import { Notice } from './notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  public async getNotices(): Promise<Notice[]> {
    return Promise.resolve([
      new Notice({
        title: 'Reservoir Mosquitos?!', 
        excerpt: 'Due to the reports of mosquitos near the newly filled Tanabe Reservoir, Denver Water did perform a site visit to further investigate the situation. Staff observed flying insects, identified as non-biting midges, near the water and to a lesser extent near the caretaker’s road. These midges are commonplace throughout the region from spring through fall and are not something that Denver Water would mitigate near a reservoir, as it would require pesticide use.', 
        path: 'reservoir-mosquitos'
      }),
      new Notice({
        title: 'A Call for Nominations',
        excerpt: '<strong>Notice is hereby given</strong> that an election will be held on Tuesday, May 8, 2018, between the hours of 7:00 a.m. and 7:00 p.m. At that time, two (2) directors will be elected to serve four-year terms. Eligible electors of the Belle Creek Metropolitan District No. 1 interested in serving on the board of directors may download a Self-Nomination and Acceptance form or obtain from the District Designated Election Official (DEO)',
        path: 'a-call-for-nominations'
      })
    ]);
  }
}
