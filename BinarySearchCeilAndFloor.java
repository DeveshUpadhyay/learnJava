import java.util.*;
public class Main {
    public static int ceil(int[] nums, int target) {
        if(target>nums[nums.length-1]){
            return -1;
        }
        int start=0, end=nums.length-1;
        while(start<=end ){
            int mid=(start+end)/2;
            if(nums[mid]==target){
                return nums[mid];
            }else if(nums[mid]<target){
                start=mid+1;
            }else {
                end=mid-1;
                // if(nums[start]>target){
                //     return nums[start];
                // }
            }
        }
        return nums[start];
    }
    public static int floor(int[] nums, int target) {
        if(target<nums[0]){
            return -1;
        }
        int start=0, end=nums.length-1;
        while(start<=end ){
            int mid=(start+end)/2;
            if(nums[mid]==target){
                return nums[mid];
            }else if(nums[mid]<target){
                start=mid+1;
            }else {
                end=mid-1;
            }
        }
        return nums[end];
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
            // System.out.println(Arrays.toString(twoSum(arr,targetSum)));
            System.out.println("Ceil:"+ceil(arr,targetSum));
            System.out.println("Floor:"+floor(arr,targetSum));
        }
        // int n=scan.nextInt();
        //     int[] arr=new int[n];
        //     for(int i=0;i<n;i++){
        //         arr[i]=scan.nextInt();
        //     }
        //     int targetSum=scan.nextInt();
        //     // System.out.println(Arrays.toString(twoSum(arr,targetSum)));
        //     System.out.println(arr[twoSum(arr,targetSum)]);
    }
}