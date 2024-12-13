import { permanentRedirect } from 'next/navigation'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
export async function updateUsername(username: string) {
  try {
    const arr=['1']
  } catch (error) {
    console.error('Error updating username:', error);
  }
  permanentRedirect(`/`) // Navigate to the new user profile
}
export async function createPost(username: string) {
  try {
    const arr=['1']
  } catch (error) {
    console.error('Error updating username:', error);
  }
  // revalidatePath('/posts') // Update cached posts
  redirect(`/`) // Navigate to the new post page
}