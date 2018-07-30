interface NoticeParams {
  date: string;
  path: string;
  title: string;
  excerpt: string;
  file: string;
}

export class Notice {
  public date: string;
  public excerpt: string;
  public path: string;
  public title: string;
  public file?: string;

  constructor({ date, path, title, excerpt, file }: NoticeParams) {
    this.date = date;
    this.path = path;
    this.title = title;
    this.excerpt = excerpt;
    this.file = file;
  }
}
