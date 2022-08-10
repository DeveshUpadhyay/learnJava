import java.util.*;

class Customers {
    int customerId;
    String customerName;
    int age;
    String city;
    
    Customers(int cid, String cname, int age, String city ) {
        this.customerId=cid;
        this.customerName=cname;
        this.age=age;
        this.city=city;
    } 
    
    public int getCid(){
        return customerId;
    }
    public String getCName(){
        return customerName;
    }
    public int getAge(){
        return age;
    }
    public String getCity(){
        return city;
    }

}

class Main {
	public static void main(String args[]) {
		Scanner scan =new Scanner(System.in);
		int n=scan.nextInt();
        List<Customers> arr=new ArrayList<>();
        int cid,age;
        String city,cname;
		for(int i=0;i<n;i++){
            cid=scan.nextInt();
            scan.nextLine();
            cname=scan.nextLine();
            age=scan.nextInt();
            scan.nextLine();
            city=scan.nextLine();
            
            Customers c=new Customers(cid,cname,age,city);
            arr.add(c);
		}
        String sCity=scan.nextLine();
		System.out.println(calculateAverageAgeOfCustomers(arr));
        Customers c=findCustomerByGivenCity(arr,sCity);
        if(c != null){
            System.out.println(c.getCid());
            System.out.println(c.getCName());
            System.out.println(c.getAge());
            System.out.println(c.getCity());
        }else{
            System.out.println("No such customer found");
        }
        
	}
    
	public static float calculateAverageAgeOfCustomers(List<Customers> arr){
		int totalAge=0;
        int n=arr.size();
        for(int i=0;i<n;i++){
            totalAge += ( arr.get(i).getAge() );
        }
		return (float)totalAge/n;
	}
	
	public static Customers findCustomerByGivenCity(List<Customers> arr, String city){
        int n=arr.size();
        Customers c=null;
        int i=0;
        for(i=0;i<n;i++){
            if(arr.get(i).getCity().equalsIgnoreCase(city)){
                c=arr.get(i);
                break;
            }
        }
        return c;
    }	
}