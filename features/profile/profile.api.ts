import type { Profile } from './profile.types';
const API_URL = process.env.API_URL;
if (!API_URL) {
  throw new Error('API_URL environment variable is not configured');
}
export async function getProfile(): Promise<Profile> {
  const response = await fetch(`${API_URL}/profile`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
  }
  const profile: Profile = await response.json();
  return profile;
}
