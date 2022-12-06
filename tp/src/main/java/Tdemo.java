
interface A {
	void ma(int x);
	
	default public void mm() {
		
	}
}

class X {
	public void mx(A a, int i) {
		a.ma(i);
	}
}

public class Tdemo {

	static int ix = 4;

	public static void main(String[] args) {

//		A a = new A() {
//			@Override
//			public void ma() {
//				System.out.println("ma method called");
//			}
//		};
		// lambda
		A a = x -> System.out.println("ma method called" + x);
		X x = new X();
		System.out.println(ix);

		// A a = new AImpl();
		x.mx(xa -> System.out.println("ma method called" + xa), 5);
		x.mx(xa -> System.out.println("ma method called" + xa), 7);

	}

}
