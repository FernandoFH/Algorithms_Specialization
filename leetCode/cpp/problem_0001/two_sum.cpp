#include <algorithm>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
  public:
    vector<int> twoSum(vector<int>& nums, int target) {
        /*  int n = nums.size();

                for (int i = 0; i < n; i++) {
                    for (int j = i + 1; j < n; j++) {
                        if (nums[i] + nums[j] == target) {
                            return {i, j};
                        }
                    }
                }
                return {};
                // Complejidad
                // - Tiempo: O(n²)
                // - Memoria: O(1)

         */
        unordered_map<int, int> seen;  // valor → índice

        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];

            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }
            seen[nums[i]] = i;
        }

        return {};
        // Complejidad
        // - Tiempo: O(n)
        // - Memoria: O(n)
    }
};
