export type EndowmentFund = {
  accountNumber: string;
  name: string;
  onlineGiving?: boolean;
};

export const endowmentFunds: EndowmentFund[] = [
  { accountNumber: "32313", name: "J. Mark and Bridget O Gidley Debate Scholarship" },
  { accountNumber: "32454", name: "Rowland – Cross Debate Research" },
  {
    accountNumber: "35088",
    name: "KU Debate Fund",
    onlineGiving: true,
  },
  { accountNumber: "36371", name: "David Macdonald Debate Scholarship" },
  { accountNumber: "36523", name: "Parson Debate Award" },
  { accountNumber: "37933", name: "Hensley and Russell Debate Fund" },
  { accountNumber: "38145", name: "Parson GTA Award" },
  { accountNumber: "39804", name: "Clarina Nichols Debate Scholarship" },
  { accountNumber: "39978", name: "Jerry Elliott Jayhawk Debate Institute Endowment" },
  {
    accountNumber: "40106",
    name: "KU Debate Heritage Fund – The Permanent Endowment of KU Debate",
    onlineGiving: true,
  },
  { accountNumber: "40594", name: "David Pittaway Professorship of Debate" },
  { accountNumber: "40811", name: "Gidley-Payne-Reed Fund for KU Debate Coaches" },
  { accountNumber: "41064", name: "Scott Harris Debate" },
  { accountNumber: "43063", name: "Champions Fund – started by David Pittaway" },
  { accountNumber: "43573", name: "Philip G Harrison Debate Fund – started by Beth Harrison" },
  { accountNumber: "44162", name: "Donn W Parson Heart of America Tournament Fund" },
];

export const KU_ENDOWMENT_ONLINE_GIVING_URL =
  "https://securelb.imodules.com/s/1312/lg21/form.aspx?sid=1312&gid=1&pgid=349&cid=945&sort=1&appealcode=WEB";

export const KU_ENDOWMENT_PHONE = "785-832-7350";

export const developmentContact = {
  name: "Dan Simon",
  title: "Team Lead / Senior Development Director",
  organization: "College of Liberal Arts & Sciences, KU Endowment Association",
  directLine: "785-832-7378",
  tollFree: "800-444-4201 x378",
  cell: "785-218-4734",
};
