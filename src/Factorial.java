/**
 * Created by malik on 16.01.2017.
 */
public class Factorial {

    public long factorial(long n){
        return factorialIter(1,1,n);
    }

    private long factorialIter(long product, long count, long maxCount){
        if(count> maxCount){
            return product;
        }
        return factorialIter(product*count, count + 1, maxCount);
    }

    public long fib(long n){
        return fibIter(1,0,n);
    }

    private long fibIter(long a, long b, long count){
        if(count == 0){
            return b;
        }
        return fibIter(a+b, a, count-1);
    }

    public long gcd(long a, long b){
        if(b==0)return a;
        return gcd(b,a%b);
    }


}
