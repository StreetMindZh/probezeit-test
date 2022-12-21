import java.util.Scanner;

public class CustomerFeedback {
    public static void main(String[] args) {
        System.out.println("Hi there! We hope you had a great experience with our company.");
        System.out.println("Please take a moment to let us know how we did by selecting one of the smiley faces below.");
        System.out.println(":) Great! We're happy to hear that you had a positive experience.");
        System.out.println(":( Oops! We're sorry to hear that you didn't have the best experience.");

        Scanner scanner = new Scanner(System.in);
        String feedback = scanner.nextLine();

        if (feedback.equals(":)")) {
            System.out.println("Thank you for your positive feedback!");
        } else if (feedback.equals(":(")) {
            System.out.println("We're sorry to hear that you didn't have a great experience. Thank you for your feedback.");
        } else {
            System.out.println("Invalid feedback. Please try again.");
        }

        System.out.println("Thank you for taking the time to provide feedback. We value your input and will use it to continually improve our products and services.");
    }
}
