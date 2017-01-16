/**
 * Created by malik on 16.01.2017.
 */
public class Main {

    public static void main(String[] args) {
        Factorial factorial = new Factorial();
        long fact = factorial.factorial(10);
        long fib = factorial.fib(1005);
        long gcd = factorial.gcd(fact, fib);
        System.out.println("factorial from 10 is " + fact);
        System.out.println("fibonacci from 1000 is "+factorial.fib(1000));
        System.out.println("gcd of fact and fib is " + gcd);

    }
}
