type NoticeParams = { path: string, title: string, excerpt: string }

export class Notice {
  public excerpt: string;
  public path: string;
  public title: string;

  constructor({ path, title, excerpt }: NoticeParams) {
    this.path = path;
    this.title = title;
    this.excerpt = excerpt;
  }
}
