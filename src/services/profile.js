import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { json } from "react-router-dom";
import { fetchData, updateData } from "./commonService";

export async function fetchCompany() {
  let companyData = await fetchData(
    "Tenant/get-company-details?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(companyData);
  return companyData;
}
export async function fetchBranch() {
  let branchData = await fetchData(
    "Tenant/get-all-branch?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(branchData);
  return branchData;
}
export async function fetchBranchById(id) {
  let branchData = await fetchData("Tenant/get-branch-byId?Id=" + id, "post");
  console.log(branchData);
  return branchData;
}
export async function fetchUserById(id) {
  let userData = await fetchData("Tenant/get-user-byId?Id=" + id, "post");
  console.log(userData);
  return userData;
}

export async function fetchTaskById(id) {
  let taskData = await fetchData("Tenant/get-task-byId?Id=" + id, "post");
  console.log(taskData);
  return taskData;
}

export async function fetchMilestoneById(id) {
  let milestoneData = await fetchData(
    "Tenant/get-milestone-byId?Id=" + id,
    "post"
  );
  console.log(milestoneData);
  return milestoneData;
}

export async function fetchPersonaById(id) {
  let personaData = await fetchData("Tenant/get-persona-byId?Id=" + id, "post");
  console.log(personaData);
  return personaData;
}

export async function fetchTask() {
  let taskData = await fetchData(
    "Tenant/get-all-task?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(taskData);
  return taskData;
}

export async function fetchNeed() {
  let needData = await fetchData(
    "Tenant/get-all-need?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(needData);
  return needData;
}

export async function fetchNeedById(id) {
  let milestoneData = await fetchData("Tenant/get-need-byId?Id=" + id, "post");
  console.log(milestoneData);
  return milestoneData;
}

export async function fetchUser() {
  let userData = await fetchData(
    "Tenant/get-all-user?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(userData);
  return userData;
}

export async function fetchMilestone() {
  let userData = await fetchData(
    "Tenant/get-all-milestone?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(userData);
  return userData;
}

export async function fetchCommonMilestone() {
  let userData = await fetchData("Common/GetMilestones", "get");
  console.log(userData);
  return userData;
}

export async function fetchCommonPersona() {
  let userData = await fetchData("Common/GetUserPersona", "get");
  console.log(userData);
  return userData;
}

export async function fetchLoanFolder() {
  let userData = await fetchData("Common/GetLoanFolder", "get");
  console.log(userData);
  return userData;
}

export async function fetchLoanStage() {
  let userData = await fetchData("Common/GetLoanStage", "get");
  console.log(userData);
  return userData;
}

export async function fetchSubLoanFolder() {
  let userData = await fetchData("Common/GetLoanSubFolder", "get");
  console.log(userData);
  return userData;
}
export async function fetchPersona() {
  let userData = await fetchData(
    "Tenant/get-all-persona?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(userData);
  return userData;
}

export async function fetchTaskgroup() {
  let userData = await fetchData("Common/GetTaskGroup", "get");
  console.log(userData);
  return userData;
}
export async function fetchStatus() {
  let userData = await fetchData("Common/GetStatus", "get");
  console.log(userData);
  return userData;
}

export async function fetchSection() {
  let userData = await fetchData("Common/GetSection", "get");
  console.log(userData);
  return userData;
}
export async function fetchOwn() {
  let userData = await fetchData("Common/GetUserPersona", "get");
  console.log(userData);
  return userData;
}

export async function updateCompany(companyData) {
  await updateData("Tenant/update-company", "post", companyData);
}
export async function addBranch(branchData) {
  let res = await updateData("Tenant/add-branch", "post", branchData);
  return res;
}

export async function updateBranch(branchData) {
  let res = await updateData("Tenant/update-branch", "post", branchData);
  return res;
}

export async function removeBranch(id) {
  await updateData("Tenant/remove-branch?Id=" + id, "post", {});
}
export async function addTask(taskData) {
  let res = await updateData("Tenant/add-task", "post", taskData);
  return res;
}

export async function updateTask(taskData) {
  let res = await updateData("Tenant/update-task", "post", taskData);
  return res;
}
export async function removeTask(id) {
  await updateData("Tenant/remove-task?Id=" + id, "post", {});
}

export async function addNeed(needData) {
  let res =await updateData("Tenant/add-need", "post", needData);
  return res;
}

export async function updateNeed(needData) {
  let res = await updateData("Tenant/update-need", "post", needData);
  return res;
}
export async function removeNeed(id) {
  await updateData("Tenant/remove-need?Id=" + id, "post", {});
}
export async function addUser(userData) {
  let res = await updateData("Tenant/add-user", "post", userData);
  return res;
}

export async function updatUser(userData) {
  let res = await updateData("Tenant/update-user", "post", userData);
  return res;
}
export async function removeUser(id) {
  await updateData("Tenant/remove-user?Id=" + id, "post", {});
}

export async function updatMilestone(userData) {
  let res = await updateData("Tenant/update-milestone", "post", userData);
  return res;
}

export async function updatPersona(userData) {
  let res = await updateData("Tenant/update-persona", "post", userData);
  return res;
}

export async function Loanadd(loanData) {
  await updateData("Loan/add-loan", "post", loanData);
}
export async function updateLoan(loanData) {
  await updateData("Loan/update-loan", "post", loanData);
}

export async function fetchLoan() {
  let loanData = await fetchData(
    "Loan/get-all-loan?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(loanData);
  return loanData;
}

export async function addBorrower(borrowerData) {
  await updateData("Loan/add-coborrower", "post", borrowerData);
}

export async function fetchBorrower() {
  let borrowerData = await fetchData(
    "Loan/get-coborrower?Id=" +
      JSON.parse(sessionStorage.getItem("user")).tenantId,
    "post"
  );
  console.log(borrowerData);
  return borrowerData;
}

export async function addProperty(propertyData) {
 let res= await updateData("Loan/add-loan-property", "post", propertyData);
 return res;
}

export async function updateProperty(propertyData) {
 let res =await updateData("Loan/update-loan-property", "post", propertyData);
 return res;
}

export async function fetchLoanById(id) {
  let userData = await fetchData("Loan/get-loan-byId?Id=" + id, "post");
  console.log(userData);
  return userData;
}

export async function fetchProperty(id) {
  let propertyData = await fetchData(
    "Loan/get-loan-Property?loanId=" + id,
    "post"
  );
  console.log(propertyData);
  return propertyData;
}

export async function fetchfinance(id) {
  let financeData = await fetchData(
    "Loan/get-loan-finance?loanId=" + id,
    "post"
  );
  console.log(financeData);
  return financeData;
}

export async function updateFinance(financeData) {
 let res= await updateData("Loan/manage-loan-finance", "post", financeData);
 return res;
}

export async function fetchTeam(id) {
  let teamData = await fetchData("Loan/get-loan-team?Id=" + id, "post");
  console.log(teamData);
  return teamData;
}

export async function updateTeam(teamData) {
  await updateData("Loan/manage-loan-team", "post", teamData);
}

export async function fetchLoanTask(id) {
  // alert(id);
  let taskData = await fetchData(
    "Loan/get-loan-task?loanId=" + id,
    "post"
  );
  console.log(taskData);
  return taskData;
}

export async function fetchLoanNeed(id) {
  let taskNeed = await fetchData(
    "Loan/get-loan-need?loanId=" + id,
    "post"
  );
  console.log(taskNeed);
  return taskNeed;
}