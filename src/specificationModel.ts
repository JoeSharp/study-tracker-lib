export interface ISpecificationSubSection {
  id: string;
  title: string;
  requirements: string[];
}

export interface ISpecificationSection {
  id: string;
  title: string;
  description?: string;
  subsections: ISpecificationSubSection[];
}

export interface ISpecificationComponent {
  id: string;
  name: string;
  sections: ISpecificationSection[];
}

export interface ISpecification {
  examBoard: string;
  subject: string;
  qualificationCode: string;
  components: ISpecificationComponent[];
}
