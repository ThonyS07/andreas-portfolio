export type list = {
    listTitle: string;
    listItems: string[];
};


export type ProjectPageContextCardTypes = {
	children: React.ReactNode;
    title: string;
    section: list[]
};


export type ProjectPageContextCardWrapperProps = {
	problemSection: list[];
	objectiveSection: list[];
};