export const compactAddressEdit = (address: string, start = 6, end = 4) => {
  if (address) {
    return `${address.substring(0, start)}...${address.substring(address.length - end)}`
  }

  return null
}