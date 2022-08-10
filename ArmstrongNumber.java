import java.util.*;;
class Main {
	public static void main(String args[]) {
		// Your code goes here
        
        Scanner scan=new Scanner(System.in);
        int no=scan.nextInt();
        
        for(int i=1;i<=no;i++){
         
            if(isArmStrong(i)){
                System.out.println("Number "+ i +" is an Arms trong Number");
            }   
        }
    }
    
    static boolean isArmStrong(int no){
        int temp=no;
        int sum=0;
        while(temp>0){
            int rem=temp%10;
            sum=sum + (rem * rem * rem);
            temp/=10;
        }
        
        return sum==no;
    }
    
}