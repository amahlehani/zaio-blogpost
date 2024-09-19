/**
 * Represents a blog post.
 */

class BlogPost {
    /**
     * Creates a blog post.
     * @param {string} title - The title of the post.
     * @param {string} content - The content of the post.
     * @param {string} author - The author of the post.
     */

    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }

    /**
     * Edits the content of the post.
     * @param {string} newContent - The new content to update the post with.
     */

    editContent(newContent) {
        this.content = newContent;
    }

    /**
     * Displays the post details as a formatted string.
     * @returns {string} The formatted post details.
     */    

    displayPost() {
        return `${this.title}\nAuthor: ${this.author}\nCreated At: ${this.createdAt.toLocaleString()}\n${this.content}`;
    }
}

/**
 * Represents a blog user.
 */

class BlogUser {

    /**
     * Creates a blog user.
     * @param {string} username - The username of the user.
     * @param {string} fullName - The full name of the user.
     */

    constructor(username, fullName) {
        this.username = username;
        this.fullName = fullName;
        this.posts = [];
    }

    /**
     * Creates a new blog post.
     * @param {string} title - The title of the new post.
     * @param {string} content - The content of the new post.
     */    

    createPost(title, content) {
        const newPost = new BlogPost(title, content, this.fullName);
        this.posts.push(newPost);
    }

    /**
     * Edits an existing blog post.
     * @param {number} index - The index of the post to edit.
     * @param {string} newContent - The new content for the post.
     */    

    editPost(index, newContent) {
        if (index >= 0 && index < this.posts.length) {
            this.posts[index].editContent(newContent);
        } else {
            console.log("Post not found.");
        }
    }

    /**
     * Deletes the last blog post.
     */

    deleteLastPost() {
        if (this.posts.length > 0) {
            this.posts.pop();
        } else {
            console.log("No posts to delete.");
        }
    }

    /**
     * Displays all posts created by the user.
     */    

    displayAllPosts() {
        if (this.posts.length === 0) {
            console.log("No posts available.");
            return;
        }
        this.posts.forEach((post, index) => {
            console.log(`Post ${index + 1}:\n${post.displayPost()}\n`);
        });
    }
}

// Create instances of BlogUser
const user1 = new BlogUser('amberWalsh', 'Amber Walsh');
const user2 = new BlogUser('oratileMfati', 'Oratile Mfati');

// User 1 creates blog posts
user1.createPost('My First Post', 'This is my first post. Excited to be here!');
user1.createPost('Another Day', 'Today was a great day for writing!');

// User 2 creates blog posts
user2.createPost('Travel Diary', 'I traveled to France and it was amazing!');
user2.createPost('Cooking Tips', 'Here are some great tips for cooking butter chicken.');

// Display posts for both users
console.log("---------------------------------------------\nUser 1's Posts:\n---------------------------------------------");
user1.displayAllPosts();

console.log("---------------------------------------------\nUser 2's Posts:\n---------------------------------------------");
user2.displayAllPosts();

// Edit a post for user 1
user1.editPost(0, 'This is the updated content of my first post. Hi my name is Amber Walsh and I look forward to sharing cool stories with you!');

// Delete the last post for user 2
user2.deleteLastPost();

// Display posts again after editing and deleting
console.log("---------------------------------------------\nUser 1's Posts After Editing:\n---------------------------------------------");
user1.displayAllPosts();

console.log("---------------------------------------------\nUser 2's Posts After Deleting Last Post:\n---------------------------------------------");
user2.displayAllPosts();
