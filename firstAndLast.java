import java.util.*;
public class Main {
    public static int[] firstAndLast(int[] nums, int target){
        int first=-1, last=-1;
        int n=nums.length;
        if(n<1){
            return new int[]{first,last};
        }
        
        int start=0,end=n-1;
        
        int counter=0;
        while(start<=end ){
            counter+=1;
            if((start+end/2)>target){
                end=(start+end/2)-1;
            }else if((start+end/2)<target){
                start=(start+end/2)+1;
            }
            
            if(first!=-1 && last!=-1){
                break;
            }
            if(first==-1){
                if(nums[start]==target){
                    first=start;
                }else{
                    start+=1;    
                }
            }
            
            if(last==-1){
                if(nums[end]==target){
                    last=end;
                }else{
                    end-=1;    
                }                
            }
        }        
        
        System.out.println("firstAndLast Counter:"+counter);
        return new int[]{first,last};
    }
    
    public static int[] searchRange(int[] nums, int target) {
        int first=-1, last=-1;
        int n=nums.length;
        if(n<1){
            return new int[]{first,last};
        }
        int counter=0;
        int start=0,end=n-1;
        while(start<=end){
            counter+=1;
            
            // System.out.println( (nums[((start+end) / 2)]  < target) +" "+((start+end)/2)+" "+target);
            if( nums[((start+end)/2)] > target){
                end=((start+end)/2)-1;
            }else if( nums[((start+end)/2)] < target){
                start=((start+end)/2)+1;
            }
            // System.out.println("Start:"+start+" End:"+end+" first:"+first+" last:"+last);
            
            if(nums[start]==target){
                if(first==-1 && last==-1){
                    first=start;
                    last=start;
                }else if(first==-1){
                    first=start;
                    break;
                }
                
                if(first>start){
                    first=start;
                }
                
                if(last<start){
                    last=start;
                }
            }
            
            if(nums[end]==target){
                if(first==-1 && last==-1){
                    first=end;
                    last=end;
                }else if(last==-1){
                    last=end;
                    break;
                }
                
                if(first>end){
                    first=end;
                }
                
                if(last<end){
                    last=end;
                }
            }
            start+=1;
            end-=1;
        }
        System.out.println("searchRange Counter:"+counter);
        return new int[]{first,last};
    }
    
    public static void main(String[] args){
        Scanner scan=new Scanner(System.in);
        int noOfTestCase=scan.nextInt();
        for(int testCase=0;testCase<noOfTestCase;testCase++){
            int n=scan.nextInt();
            int[] arr=new int[n];
            for(int i=0;i<n;i++){
                arr[i]=scan.nextInt();
            }
            int targetSum=scan.nextInt();
            // System.out.println("First Occurence:"+firstAndLast(arr,targetSum)[0]+" Last Occurence:"+firstAndLast(arr,targetSum)[1]);
            System.out.println("First Occurence:"+searchRange(arr,targetSum)[0]+" Last Occurence:"+searchRange(arr,targetSum)[1]);
        }
    }
}