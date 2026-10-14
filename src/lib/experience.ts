// Start of full-time career (AtLink Communication Inc, Aug 2020)
export const CAREER_START = new Date(2020, 7, 1);

export const getYearsOfExperience = (now: Date = new Date()): number => {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() < CAREER_START.getDate())
  ) {
    years--;
  }
  return years;
};

export const YEARS_OF_EXPERIENCE = getYearsOfExperience();
