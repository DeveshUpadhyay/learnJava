import java.util.*;

class Main {
    
    public static int solution(int k, int n, int[] arr){
        int resultCount=0;
        
        for(int i=0;i<n;i++){
            if(arr[i]<=k){
                k-=arr[i];
                resultCount+=1;
            }
        }
        
        
        return resultCount;
    }
    
    
    public static int alternateSolution(int k, int n, int[] arr){
        int resultCount=0;
        Arrays.sort(arr);
        for(int i=0;i<n;i++){
            if(arr[i]<=k){
                k-=arr[i];
                resultCount+=1;
            }else{
                break;
            }
        }
        return resultCount;
    }
    
	public static void main(String args[]) {
        Scanner scan= new Scanner(System.in);
        int k=scan.nextInt();
        int n=scan.nextInt();
        
        int[] arr=new int[n];
        for(int i=0;i<n;i++){
            arr[i]=scan.nextInt();
        }
        System.out.println(solution(k,n,arr));
        System.out.println(alternateSolution(k,n,arr));
	}
}