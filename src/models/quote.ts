export interface Quote {
  content: string;
  author: string;
};


export interface RandomQuoteResponse extends Quote {
  _id: string;
  authorSlug: string;
  length: number;
  tags: string[];
};

