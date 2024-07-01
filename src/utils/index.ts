export const compactAddressEdit = (address: string, start = 6, end = 4) => {
  if (address) {
    return `${address.substring(0, start)}...${address.substring(address.length - end)}`
  }
  return null
}

export const formatNumber = (num: number) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}