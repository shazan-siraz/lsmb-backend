const isDateOver = (endDate: string) => {
    const today = new Date();
    const targetDate = new Date(endDate);
  
    // Check if the target date is over today
    return targetDate < today;
  };
  
  
  export default isDateOver;
  
  