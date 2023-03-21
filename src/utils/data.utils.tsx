//We're returning a promise when using await
//A generic can be used throughout the rest of the function 
//getData is recieving some type <T> which is what we're going to return from this function inside of a promise

// export const getData = async <T>(url: string): Promise<T>=>{
//     const response = fetch(url);
//     return  (await response).json()
// }



const utils = () => {
  return (
    <div>data.utils</div>
  )
}

export default utils