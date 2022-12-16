import { fetchData, updateData } from "./commonService";

export async function fetchBorrowerById(id) {
  let borrowerData = await fetchData(
    "Loan/get-coborrower?loanId=" + id,
    "post"
  );
  console.log(borrowerData);
  return borrowerData;
}
export async function addBorrower(borrowerData) {
let res = await updateData("Loan/add-coborrower", "post", borrowerData);
return res;
}

export async function fetchLoanByFolder(folderId) {
  let loanData = await fetchData(
    "Loan/get-all-loan-by-folder?tenantId=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId +
      "&FolderId=" +
      folderId,
    "post"
  );
  console.log(loanData);
  return loanData;
}

export async function addLoanTask(loantaskData) {
  let res = await updateData("Loan/add-task", "post", loantaskData);
  return res;
}

export async function updateLoanTask(loantaskData) {
  let res = await updateData("Loan/Update-task", "post", loantaskData);
  return res;
}

export async function fetchLoanTaskById(id) {
  let loantaskData  = await fetchData("Loan/edit-task?Id=" + id, "post");
  console.log(loantaskData);
  return loantaskData;
}


export async function addLoanNeed(loanNeedData) {
  let res = await updateData("Loan/add-Needs", "post", loanNeedData);
  return res;
}

export async function updateLoanNeed(loanNeedData) {
  let res = await updateData("Loan/update-Needs", "post", loanNeedData);
  return res;
}

export async function fetchLoanNeedById(id) {
  let loanNeedData  = await fetchData("Loan/edit-Needs?Id=" + id, "post");
  console.log(loanNeedData);
  return loanNeedData;
}

