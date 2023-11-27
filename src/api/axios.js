import axios from "axios";
const BASE_URL = "https://voicespireapi20231127092029.azurewebsites.net";

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosOne = axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getVoiceList = async (
  currentPage,
  PageSize,
  sortType,
  isApproved
) => {
  const response = await axiosOne.get(
    `/api/VoiceDetails/${currentPage},${PageSize},${sortType},${isApproved}/GetPage`
  );
  console.log(response.data.results);

  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getAllProjectsForTracking = async (buyerId) => {
  const response = await axiosOne.get(
    `/api/Buyers/GetProjectByBuyerId/${buyerId}`
  );
  console.log(response.data);

  return response.data;
};

export const getAllJobsForTracking = async (
  currentPage,
  PageSize,
  sellerId
) => {
  const response = await axiosOne.get(
    `/api/VoiceSellers/SearchVoiceJobBySellerId/${currentPage},${PageSize},${sellerId}`
  );
  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getProjects = async (
  currentPage,
  PageSize,
  sortType,
  projectType,
  WaitApprove,
  NotApproved,
  Apply,
  Processing,
  Done,
  WaitToAccept,
  Denied,
  inputSearch
) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/SearchByFilterForManager/${currentPage},${PageSize},${sortType},${projectType},${WaitApprove},${NotApproved},${Apply},${Processing},${Done},${WaitToAccept},${Denied},?search=${inputSearch}`
  );
  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const applyingProjectsFilter = async (
  currentPage,
  PageSize,
  inputSearch,
  sort,
  minPrice,
  maxPrice,
  region,
  type,
  gender,
  property,
  duration
) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/SearchByFilter/${currentPage},${PageSize}?search=${inputSearch}&sortType=${sort}&fromPrice=${minPrice}&toPrice=${maxPrice}&region=${region}&type=${type}&gender=${gender}&property=${property}&duration=${duration}`
  );

  console.log(response.data);
  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getVoiceListAndSearch = async (
  currentPage,
  PageSize,
  sortType,
  isApproved,
  inputSearch
) => {
  const response = await axiosOne.get(
    `/api/VoiceDetails/${currentPage},${PageSize},${sortType},${isApproved}/GetPage?search=${inputSearch}`
  );
  console.log(response.data.results);

  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getVoice = async (sellerId) => {
  const response = await axiosOne.get(`/api/VoiceDetails/${sellerId}`);

  // const valuesArray = Object.values(response.data);
  // return valuesArray;
  return response.data;
};

export const voicesFilter = async (
  currentPage,
  PageSize,
  isApproved,
  inputName,
  inputMinPrice,
  inputMaxPrice,
  inputTone,
  inputRegion,
  inputGender,
  inputType,
  inputProp,
  inputRate
) => {
  const response = await axiosOne.get(
    `/api/VoiceDetails/${currentPage},${PageSize},${isApproved}/SearchByFilter?search=${inputName}&fromPrice=${inputMinPrice}&toPrice=${inputMaxPrice}&tone=${inputTone}&region=${inputRegion}&gender=${inputGender}&property=${inputProp}&type=${inputType}&rate=${inputRate}`
  );
  console.log(response.data.results);

  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getPaymentInfo = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetPaymentInformation/${projectId}`
  );
  return response.data;
};

export const getProjectApprovalDetail = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetByID/${projectId}`
  );
  return response.data;
};

export const approveProject = async (projectId) => {
  const response = await axiosOne.put(
    `/api/VoiceProjects/ApproveProject/${projectId}`
  );
  return response.data;
};

export const notApproveProject = async (projectId) => {
  const response = await axiosOne.put(
    `/api/VoiceProjects/NotApprovedProject/${projectId}`
  );
  return response.data;
};

export const sendVoiceProject = async (
  BuyerId,
  voiceSellerId,
  title,
  description,
  duration,
  deadline,
  linkDocDemo,
  linkDocMain,
  linkThumbnail,
  request
) => {
  const response = await axiosOne.post(
    `/api/Buyers/SendVoiceProject/${BuyerId},${voiceSellerId},${title},${description},${duration},${deadline}?request=${request}`,
    { linkDocDemo, linkDocMain, linkThumbnail }
  );
  return response.data;
};

export const uploadVoiceProject = async (
  BuyerId,
  title,
  description,
  price,
  duration,
  numberOfEdit,
  deadline,
  inputRequest,
  inputVoiceProperty,
  inputTextLength,
  inputVoiceGender,
  inputVoiceTone,
  inputVoiceRegion,
  inputVoiceLocal,
  inputVoiceInspirational,
  inputVoiceStress,
  inputVoicePronuonce,
  inputVoiceSpeed,
  linkDocDemo,
  linkDocMain,
  linkThumbnail
) => {
  const response = await axiosOne.post(
    `/api/Buyers/UploadVoiceProject/${BuyerId},${title},${description},${price},${duration},${numberOfEdit},${deadline}?request=${inputRequest}&voiceProperty=${inputVoiceProperty}&textLength=${inputTextLength}&voiceGender=${inputVoiceGender}&voiceTone=${inputVoiceTone}&voiceRegion=${inputVoiceRegion}&voiceLocal=${inputVoiceLocal}&voiceInspirational=${inputVoiceInspirational}&voiceStress=${inputVoiceStress}&voicePronuonce=${inputVoicePronuonce}&voiceSpeed=${inputVoiceSpeed}`,
    { linkDocDemo, linkDocMain, linkThumbnail }
  );
  return response.data;
};

export const applyToProject = async (
  voiceProjectId,
  voiceSellerId,
  linkDemo
) => {
  const response = await axiosOne.post("/api/VoiceSellers/ApllyToProject", {
    voiceProjectId,
    voiceSellerId,
    linkDemo,
  });
  return response.data;
};

export const getCandidates = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetListDemoForProject/${projectId}`
  );
  console.log(response.data);
  return response.data;
};

export const getSellerProfile = async (id) => {
  const response = await axiosOne.get(`/api/VoiceSellers/${id}`);
  return response.data;
};

export const getBuyerProfile = async (id) => {
  const response = await axiosOne.get(`/api/Buyers/${id}`);
  return response.data;
};

export const updateSellerProfile = async (
  voiceSellerId,
  fullname,
  phone,
  email,
  password,
  birthDay,
  introduce,
  address,
  gender,
  avatarLink,
  rateAvg,
  bankName,
  bankNumber,
  bankAccountName,
  googleId,
  status
) => {
  const response = await axiosOne.put(`/api/VoiceSellers/${voiceSellerId}`, {
    voiceSellerId,
    fullname,
    phone,
    email,
    password,
    birthDay,
    introduce,
    address,
    gender,
    avatarLink,
    rateAvg,
    bankName,
    bankNumber,
    bankAccountName,
    googleId,
    status,
  });
  return response.data;
};

export const acceptApplications = async (voiceJobId, projectId) => {
  const response = await axiosOne.put(
    `/api/Buyers/ApproveDemo/${voiceJobId},${projectId}`
  );
  return response.data;
};

export const getOfficialVoices = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetTransactionOfProject/${projectId}`
  );
  console.log(response.data);
  return response.data;
};

export const sendMainVoice = async (
  voiceProjectId,
  voiceSellerId,
  linkVoice
) => {
  const response = await axiosOne.post(
    `/api/VoiceSellers/SendMainVoiceForProject`,
    {
      voiceProjectId,
      voiceSellerId,
      linkVoice,
    }
  );
  return response.data;
};

export const requestEdit = async (transactionId, inputFeedBack) => {
  const response = await axiosOne.put(
    `/api/Buyers/RequestEdit/${transactionId}?feedback=${inputFeedBack}`
  );
  return response.data;
};

export const acceptOfficialVoice = async (transactionId) => {
  const response = await axiosOne.put(
    `/api/Buyers/AcceptTransaction/${transactionId}`
  );
  return response.data;
};

export const denyVoiceProject = async (projectId) => {
  const response = await axiosOne.put(
    `/api/VoiceSellers/DeniesProject/${projectId}`
  );
  return response.data;
};

export const acceptVoiceProject = async (projectId) => {
  const response = await axiosOne.put(
    `/api/VoiceSellers/AcceptProject/${projectId}`
  );
  return response.data;
};

export const checkBankAccountForBuyer = async (id) => {
  const response = await axiosOne.get(`/api/Buyers/${id}`);
  if (
    !response.data?.bankName ||
    !response.data?.bankNumber ||
    !response.data?.bankAccountName
  ) {
    return false;
  } else {
    return true;
  }
};

export const checkBankAccountForSeller = async (id) => {
  const response = await axiosOne.get(`/api/VoiceSellers/${id}`);
  if (
    !response.data?.bankName ||
    !response.data?.bankNumber ||
    !response.data?.bankAccountName
  ) {
    return false;
  } else {
    return true;
  }
};

export const getPaymentDetail = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetPaymentDetail/${projectId}`
  );
  return response.data;
};

export const suggestVoices = async (projectId) => {
  const response = await axiosOne.post(
    `/api/VoiceProjects/ProjectSuggestions/${projectId}`
  );
  return response.data;
};

export const suggestVoice = async (projectId, sellerId) => {
  const response = await axiosOne.post(
    `/api/VoiceProjects/ProjectSuggestions/${projectId}/${sellerId}`
  );
  return response.data;
};
export const textAnalysis = async (linkDoc) => {
  const response = await axiosOne.post(`/api/VoiceProjects/AIAnalysis`, {
    linkDoc,
  });
  return response.data;
};
