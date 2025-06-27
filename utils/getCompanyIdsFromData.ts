export const getCompanyIdsFromData = (data: any) => {
  if (data?.user_companies) {
    return data?.user_companies?.allowed_companies?.map((company: any) => company[0]);
  }

  return data?.user_context?.company_ids;
}